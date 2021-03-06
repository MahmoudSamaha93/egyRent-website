// import React from 'react'
import { connect } from "react-redux";
import { createPost } from "../../actions/posts";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      post: {
        title: "",
        location: "",
        address: "",
        type: "",
        price: 0,
        guests: 0,
        rooms: 0,
        beds: 0,
        baths: 0,
        bedrooms: 0,
        description: "",
        /* amenities: { */
        wifi: false,
        kitchen: false,
        heating: false,
        tv: false,
        elevator: false,
        breakfast: false,
        ac: false,
        smokeAlarm: false,
        /*  }, */
      },
      pictures: [],
    };
  }

  componentWillMount() {
    const script = document.createElement("script");
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    if (localStorage.getItem("token")) {
      return (
        <div class="container py-5 ">
          <div class="row">
            {/* <div class="col-md-10 mx-auto "> */}
            <form
              className="p-5 col-12"
              enctype="multipart/form-data"
              method="post"
            >
              <h1>Create post</h1>
              <div class="form-group row">
                <div class="col-sm-12">
                  <label for="Title">
                    Property Title <span className="require">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={this.state.post.title}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          title: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div class="col-sm-6">
                  <label for="Address">
                    Address <span className="require">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={this.state.post.address}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          address: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div class="col-sm-6">
                  <label for="Location">
                    Location <span className="require">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={this.state.post.location}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          location: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <label for="type">Type Of Rent</label>
                  <select
                    id="type"
                    name="type"
                    className="form-control"
                    defaultValue={this.state.post.type}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          type: e.target.value,
                        },
                      });
                      console.log(this.state.post);
                    }}
                  >
                    <option selected disabled>
                      Choose from list here
                    </option>
                    <option value="Apartment">Apartment</option>
                    <option value="Room">Room</option>
                    <option value="Villa">Villa</option>
                    <option value="Roof">Roof</option>
                    <option value="Boutique">Boutique</option>
                    <option value="Studio">Studio</option>
                    <option value="House">House</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="guests">
                    Number of Guests<span className="require">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max="15"
                    value={this.state.post.guests}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          guests: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div class="col-sm-6">
                  <label for="rooms">
                    Number of Room<span className="require">*</span>
                  </label>
                  <input
                    type="number"
                    id="rooms"
                    name="rooms"
                    min="1"
                    max="15"
                    className="form-control"
                    value={this.state.post.rooms}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          rooms: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="baths">
                    Number of Bath<span className="require">*</span>
                  </label>
                  <input
                    type="number"
                    id="baths"
                    name="baths"
                    min="1"
                    max="15"
                    className="form-control"
                    value={this.state.post.baths}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          baths: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div class="col-sm-6">
                  <label for="beds">
                    Number of Beds<span className="require">*</span>
                  </label>
                  <input
                    type="number"
                    id="beds"
                    name="beds"
                    min="1"
                    max="15"
                    className="form-control"
                    value={this.state.post.beds}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          beds: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="bedrooms">
                    Number of BedRooms<span className="require">*</span>
                  </label>
                  <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    min="1"
                    max="15"
                    className="form-control"
                    value={this.state.post.bedrooms}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          bedrooms: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div class="col-sm-6">
                  <label for="price">
                    Price<span className="require">*</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    min="1"
                    className="form-control"
                    value={this.state.post.price}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          price: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
              <div class="form-group row">
                <div className="col-sm-12">
                  <label for="description">
                    Description<span className="require">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    row="5"
                    className="form-control"
                    value={this.state.post.description}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          description: e.target.value,
                        },
                      });
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                  <label for="pics">Select Your Property Pictures:</label>
                  <input
                    type="file"
                    id="pics"
                    name="pics"
                    multiple
                    enctype="multipart/form-data"
                    onChange={(e) => {
                      this.setState({
                        pictures: e.target.files,
                      });
                    }}
                  />
                  {/* /* const pictures = state.pictures.concat(
                        state.e.target.files[0]
                      );
                      return pictures; */
                  /* {state
                      pictures: e.target.files[0], 
                      
                      <div className="col-sm-12">
                <div class="file-input mb-5">
                  <input type="file" id="file" class="file" />
                  <label for="file">file one</label>
                  <input type="file" id="file" class="file" />
                  <label for="file">file Two</label>
                  <input type="file" id="file" class="file" />
                  <label for="file">file Three</label>
                </div>
               <label for="Comment">
                  Comment<span className="require">*</span>
                </label>
                <textarea id="Comment" name="user_bio" row="5"></textarea>
              </div>
              */}
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                  <label>Interests</label>
                  <br />
                  <div class="checkboxes pr-2">
                    <label for="wifi">
                      <input
                        type="checkbox"
                        id="wifi"
                        value={this.state.post.wifi}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              wifi: true,
                            },
                          });
                          // console.log(this.state.post.wifi);
                        }}
                      />
                      <span className="text-dark m-1">WiFi</span>
                    </label>
                    <label for="kitchen" className="m-2">
                      <input
                        type="checkbox"
                        id="kitchen"
                        value={this.state.post.kitchen}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              kitchen: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">kitchen</span>
                    </label>
                    <label for="heating" className="m-2">
                      <input
                        type="checkbox"
                        id="heating"
                        value={this.state.post.heating}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              heating: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">Heating</span>
                    </label>
                    <label for="tv">
                      <input
                        type="checkbox"
                        id="tv"
                        value={this.state.post.tv}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              tv: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">TV</span>
                    </label>
                    <br />
                    <label for="elevator">
                      <input
                        type="checkbox"
                        id="elevator"
                        value={this.state.post.elevator}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              elevator: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">Elevator</span>
                    </label>
                    <label for="breakfast" className="m-2">
                      <input
                        type="checkbox"
                        id="breakfast"
                        value={this.state.post.breakfast}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              breakfast: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">Breakfast</span>
                    </label>
                    <label for="ac" className="m-2">
                      <input
                        type="checkbox"
                        id="ac"
                        value={this.state.post.ac}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              ac: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">AC</span>
                    </label>
                    <label for="smokeAlarm" className="m-2">
                      <input
                        type="checkbox"
                        id="smokeAlarm"
                        value={this.state.post.smokeAlarm}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              smokeAlarm: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">smokeAlarm</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* <button
              type="Create"
              className="btn rounded btn-info "
              onClick={(e) => {
                console.log(this.state.post);
              }}
            >
              Create an advertisement
            </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  const formData = new FormData();
                  Object.keys(this.state.post).forEach((key) =>
                    formData.append(key, this.state.post[key])
                  );
                  for (let i = 0; i < this.state.pictures.length; i++) {
                    formData.append("files", this.state.pictures[i]);
                  }
                  this.props.createPost(
                    window.location.pathname.split("/")[1],
                    formData
                  );

                  console.log(this.state.pictures);
                }}
              >
                Create Post
              </button>
            </form>
            {/* </div> */}
          </div>
        </div>
      );
    } else {
      window.location.assign("/signin");
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreatePost);
