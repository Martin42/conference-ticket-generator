import uploadSVG from "../images/icon-upload.svg";
import patternCircleSVG from "../images/pattern-circle.svg";

const Form = () => {
  return (
    <section className="form-container">
      <form action="">
        <div className="input-container">
          <label htmlFor="Avatar">Upload Avatar</label>
          <div className="upload-input-wrapper">
            <input type="file" title="Avatar" />
            <button type="button" className="upload-btn">
              <img src={uploadSVG} alt="upload logo" width={26} height={26} />
            </button>
            <span className="upload-instructions-span">
              Drag and drop or click to upload
            </span>
          </div>
          <span className="upload-info-span">
            ⓘ Upload your photo (JPEG, or PNG - max size of 500kb)
          </span>
        </div>

        <div className="input-container">
          <label htmlFor="Name">Full Name</label>
          <input type="text" title="Name" />
        </div>

        <div className="input-container">
          <label htmlFor="Email">Email Address</label>
          <input type="email" title="Email" placeholder="example@email.com" />
          <img
            src={patternCircleSVG}
            alt="pattern circle svg"
            className="pattern-circle-svg"
            width={80}
            height={80}
          />
        </div>

        <div className="input-container">
          <label htmlFor="Github">Github Username</label>
          <input type="text" title="Github" placeholder="@yourusername" />
        </div>

        <button className="submit-btn" type="submit">
          Generate My Ticket
        </button>
      </form>
    </section>
  );
};

export default Form;
