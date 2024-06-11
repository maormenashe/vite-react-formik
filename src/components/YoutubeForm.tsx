import * as React from "react";

interface IYoutubeFormProps {}

const YoutubeForm: React.FunctionComponent<IYoutubeFormProps> = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"></input>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"></input>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel"></input>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
