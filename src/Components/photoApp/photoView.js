/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./photoView.css";
import axios from "axios";

class photoView extends Component {
  constructor(props) {
    super(props);
      this.state = {
          titles: [],
      };

  }

    //   get data related to one album by id
    getPhotosOfAnAlbum = (event) => {

     event.preventDefault();
    const form = event.target;
    const {
      album
    } = form.elements;
            axios(`https://suguchallenge3.herokuapp.com/request/photos/${album.value}`)
            .then(response => {
                var ad = (response.data.data.body)
                this.setState({ titles: ad })
            })
            .catch(error => {
            console.log( error);
            })
  }


  render() {
    return (
        <div className="t-container">
        <div className="h-100 w-100 py-2">
                <div className="col-12 tab_container-stock ">
                <form onSubmit = {this.getPhotosOfAnAlbum.bind(this)}>
                    <div className="input-group mb-3">

                        <input type="number"
                            className="form-control"
                            placeholder="Enter Album's id"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            id="album"
                        />
                <div className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="submit"
                                    value="submit"
                                >
                                    Get Album Photos By Id
                                </button>
                        </div>
                    </div>
                <div className="col-12">
                <div>
                      <table
                        className="table table-borderless"
                                    id="TableForSuppliers"
                                    onSubmit={this.getPhotosOfAnAlbum}
                                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Thumbnails</th>
                        </tr>
                      </thead>
                      {this.state.titles
                        .sort((a, b) => a.id - b.id)
                                    .map((pic, index) => {
                              return (
                            <tbody>
                              <>
                                    <tr>
                                    <th scope="row">{index + 1}</th>
                                              <td> {pic.title}</td>
                                    <td>  <img src={pic.thumbnailUrl}/> </td>
                                  </tr>
                              </>
                         </tbody>
                         );
                        })}
                    </table>
             </div>
            </div>
         </form>
          </div>
        </div>
      </div>
    );
  }
}
export default photoView;
