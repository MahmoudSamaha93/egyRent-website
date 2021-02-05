import "./Profile.css";
/* import Posts from "./Profile/Posts";
import History from "./Profile/History"; */
import {
  Route,
  /* BrowserRouter as Router, */ Switch,
  Link,
} from "react-router-dom";
import ProfilePosts from "./ProfilePosts/Profile-posts";
import Saved from "./Saved/Saved";
import Settings from "./Settings/Settings";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
/* import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded"; */
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
/* import GradeRoundedIcon from "@material-ui/icons/GradeRounded"; */

function App() {
  return (
    <div className="row text-gray-600 body-font m-5 jumbotron">
      <div className="col-md-4 rightBorder">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                alt="content"
                className="rounded-circle w-75 bg-dark imgCenter"
              ></img>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"></div>
                  <div className="flex flex-col items-center  text-left justify-center">
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
                      <p className="d-block">
                        <PhoneRoundedIcon
                          className="fa1 mr-1"
                          style={{ color: "#577AB7" }}
                        />{" "}
                        +01234567
                      </p>
                      <p className="d-block">
                        <EmailRoundedIcon
                          className="fa1 mr-1"
                          style={{ color: "#577AB7" }}
                        />
                        profile@gmail.com{" "}
                      </p>
                      {/*  <p className="d-block">
                    <InfoRoundedIcon className="fa1 mr-1" />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p> */}
                    </div>
                    <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4 text-left">
                      <p className="text-base">
                        <InfoRoundedIcon
                          className="fa1 mr-1"
                          style={{ color: "#577AB7" }}
                        />
                        Raclette knausgaard hella meggs normcore williamsburg
                        enamel pin sartorial venmo tbh hot chicken gentrify
                        portland.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="jumbotron col-md-8 row h-25 justify-content-between">
        <h1 className="font-medium title-font mt-4 ml-3 text-gray-900 text-lg">
          Phoebe Caulfield
        </h1>
        {/* <NotificationsRoundedIcon
          className="ico rounded-circle p-2"
          style={{ color: "white", fontSize: 50 }}
        /> */}
        <div className="col-md-8  outerElem p-2">
          <hr />
          <div className="d-flex justify-content-between ">
            <Link
              to="/profile/profile-posts"
              className="btn w-100 roundedBtn text-left text-dark "
            >
              Posts
            </Link>
            <Link
              to="/profile/profile-saved"
              className="btn w-100 roundedBtn text-left text-dark"
            >
              Saved
            </Link>
            <Link
              to="/profile/profile-settings"
              className="btn w-100 roundedBtn text-left text-dark"
            >
              Settings
            </Link>
          </div>
        </div>
        <div className="col-md-10 outerElem p-2">
          <Switch>
            <Route exact path="/profile">
              <ProfilePosts />
            </Route>
            <Route exact path="/profile/profile-posts">
              <ProfilePosts />
            </Route>
            <Route exact path="/profile/profile-saved">
              <Saved />
            </Route>
            <Route exact path="/profile/profile-settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;