import React from "react";
import urls from "../urls";

const Code = () => <a href={urls.githubRepo}
                      target='_blank'
                      data-test='code'
                      rel='noopener noreferrer'
                      id='repo'>Code</a>;

export default Code;
