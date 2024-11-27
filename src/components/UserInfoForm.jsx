const UserInfoFormInput = ({ inputId, inputType, children }) => {
  return (
    <div className="w-full flex items-center justify-between gap-3">
      <label htmlFor={inputId} className="text-lg">
        {children}
      </label>
      <input
        type={inputType}
        name={inputId}
        id={inputId}
        className="p-1.5 text-lg common-border"
        required
      />
    </div>
  );
};

const AuthForm = ({ configData, submitBtnName, onSumbitForm }) => {

  return (
    <form onSubmit={onSumbitForm} className="p-10 flex flex-col items-center gap-11">
      <div className="flex flex-col items-center gap-3">
        {configData.map(({ id: inputId, name, inputType }) => (
          <UserInfoFormInput key={`${inputId}`} inputId={inputId} inputType={inputType}>
            {name}
          </UserInfoFormInput>
        ))}
      </div>
      <button className="lime-button">{submitBtnName}</button>
    </form>
  );
};

export default AuthForm;
