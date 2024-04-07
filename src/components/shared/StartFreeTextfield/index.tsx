import Button from "../Button";

const StartFreeTextfield = () => {
  return (
    <div className="start-free-textfield mt-10">
      <input placeholder="Enter your email" type="text" />
      <Button variant="filled">Start Free</Button>
    </div>
  );
};

export default StartFreeTextfield;
