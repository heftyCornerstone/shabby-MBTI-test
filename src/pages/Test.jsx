import TestForm from "../components/test/Testform";


const Test = () => {
  return (
    <div className="mb-20 flex justify-center items-center">
      <div className="w-3/4 bg-white flex flex-col items-center gap-14">
        <h1 className="text-4xl font-bold">테스트지</h1>
        <TestForm />
      </div>
    </div>
  );
};

export default Test;
