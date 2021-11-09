import React from "react";
const Curso = (props) => {
  return (
      <div class="col s4">
        <div class="card small">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="" src= "https://materializecss.com/images/sample-1.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{props.name}<i class="material-icons right">more_vert</i></span>
            <p><a href="#">Ver mais</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  );
};

export default Curso;