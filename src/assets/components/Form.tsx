const Form = () => {
  return (
    <section className="form-container">
      <div>
        <label htmlFor="Avatar">Avatar</label>
        <input type="file" name="Avatar" />
        <span>Upload your photo (JPEG, or PNG - max size of 500kb)</span>
      </div>

      <div>
        <label htmlFor="Name">FUll Name</label>
        <input type="text" name="Name" />
      </div>

      <div>
        <label htmlFor="Email">Email Address</label>
        <input type="text" name="Email" />
      </div>

      <div>
        <label htmlFor="Github">Github Username</label>
        <input type="text" name="Github" />
      </div>
    </section>
  );
};

export default Form;
