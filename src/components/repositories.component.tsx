import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {getRepos} from "../github-api";

export interface IState {
  apiurl: string;
  datarecords: any[];
  datacolumns: any[];
}

class Repositories extends React.Component<RouteComponentProps<any>, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      datarecords: [],
      datacolumns: [],
    }
  }

  public componentWillMount(): void {
    let userId = this.props.match.params.userId.substring(1);
    getRepos(userId).then(response => {
      this.setState({datarecords: response});
      this.extractColumnNames();
    }).catch(error => {
      console.log(error);
    })
  }

  private extractColumnNames() {
    const firstrecord = ["name", "git_url"];
    this.setState({datacolumns: firstrecord,});
  }

  private displayRecords(key: number) {
    const datacolumns= this.state.datacolumns;
    return datacolumns.map((each_col) =>
        this.displayRecordName(each_col,key)
    )
  }

  private displayRecordName(colname:string, key:number){
    const record = this.state.datarecords[key];
    return <th>{record[colname]}</th>
  }

  private Capitalize(str: string){
    const str_t = str.toUpperCase();
    return str_t.replace("_", " ");
  }

  public render() {
    const datarecords = this.state.datarecords;
    const each_datarecord_keys = ["name", "git_url"];
    return (
        <div className="text-center">
          {datarecords.length === 0 && (
              <div className="text-center">
                <h2>No repositories found</h2>
              </div>
          )}
          <div className="container">
            <div className="row">
              <table className="table table-bordered">
                <thead className="thead-light">
                <tr>
                  {each_datarecord_keys && each_datarecord_keys.map(each_datarecord_key =>
                      <th scope="col">{this.Capitalize(each_datarecord_key)}</th>
                  )}
                </tr>
                </thead>
                <tbody>
                {datarecords.map && datarecords.map((each_datarecord, recordindex) =>
                    <tr key={each_datarecord.id}>
                      {this.displayRecords(recordindex)}
                    </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
  }
}

export default Repositories;