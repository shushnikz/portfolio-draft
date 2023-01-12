import React from "react"
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function Project() {
  return (
    <div className="project">
      <div className="card m-3 border-0">
        <div className="card-header border-0 card3"><h1>My Projects</h1></div>

        <div className="row row-cols-1 row-cols-md-3 g-4 m-3">

          <div className="col">
            <div className="card h-100">
              <img src="https://miro.medium.com/max/1200/1*rQB4fmakQa_Cwhwzgsy9YQ.png"
                className="card-img-top" alt="you-tube-clone"></img>
              <div className="card-body">
                <h5 className="card-title head">YouTube-Clone</h5>
                <p className="card-text cont">Technologies used: HTML CSS Javascript</p>
                <p className="card-text cont">YouTube Clone is an efficacious video-sharing solution that aids
                  you in launching your video streaming software that has the power to rival YouTube itself</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://spectacular-youtiao-44c85f.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/You-tube-Clone-App" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2019/06/38.1.png?resize=690%2C402&ssl=1"
                className="card-img-top" alt="shopping -app"></img>
              <div className="card-body">
                <h5 className="card-title head">Gmail Clone</h5>
                <p className="card-text cont">Technologies used: CSS React js node js express MongoDB</p>
                <p className="card-text cont">Using gmail clone you can send mail,delete mail,
                  you can mark important mail as starred,initially you have to create account and login to the mail</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shushnikz/bulk-email-tool-backend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://charming-rabanadas-232116.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/bulk-email-tool-frontend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="http://unblast.com/wp-content/uploads/2020/04/Chat-Dashboard-UI-Template-1.jpg"
                className="card-img-top" alt="chat-app"></img>
              <div className="card-body">
                <h5 className="card-title head">Chat App</h5>
                <p className="card-text cont">Technologies used: CSS React js, MongoDB, node js</p>
                <p className="card-text cont">A chat application makes it easy to communicate with people
                  anywhere in the world by sending and receiving messages in real time. Here we have different rooms for members and we can send message
                  and receive Notifications</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shushnikz/chat-app-backend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://mellifluous-sunshine-658712.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/chat-app-frontend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://cdn.neow.in/news/images/uploaded/2018/09/1537418720_keep_notes.jpg"
                className="card-img-top" alt="keep-note"></img>
              <div className="card-body">
                <h5 className="card-title head">Keep-Note</h5>
                <p className="card-text cont">Technologies used: HTML CSS React js</p>
                <p className="card-text cont">In keep-note app you can note down the content and also you can delete it.</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://monumental-griffin-858257.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/keep-note" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://www.androidauthority.com/wp-content/uploads/2020/04/Glassdoor-screenshot-2020.jpg"
                className="card-img-top" alt="movie-app"></img>
              <div className="card-body">
                <h5 className="card-title head">Find-job-App</h5>
                <p className="card-text cont">Technologies used: CSS React js node js express MongoDB</p>
                <p className="card-text cont">In the Job App you can create your profile,
                  edit the profile, being a user you can create a job,
                  you can post job and in the posted jobs we can see applied jobs and so many application available</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shushnikz/job-app-backend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://beautiful-clafoutis-5cab2f.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/job-app-frontend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
                className="card-img-top" alt="cat-app"></img>
              <div className="card-body">
                <h5 className="card-title head">Todo App</h5>
                <p className="card-text cont">Technologies used: HTML CSS React js, node js, express</p>
                <p className="card-text cont">In this app we can make the list of task we want to do</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shushnikz/backend-todo" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://hilarious-bunny-7486ee.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/job-app-frontend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}