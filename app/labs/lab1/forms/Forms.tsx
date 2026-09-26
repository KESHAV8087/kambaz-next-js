import TextFields from "./TextFields";
import TextAreaFields from "./TextAreaFields";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";
import Dropdowns from "./Dropdowns";
import OtherInputTypes from "./OtherInputTypes";
import Buttons from "./Buttons";
import YourForm from "./YourForm"; // the ONE canonical YourForm

export default function Forms() {
  return (
    <div id="wd-forms">
      <h2>Forms</h2>
      <TextFields />
      <TextAreaFields />
      <RadioButtons />
      <Checkboxes />
      <Dropdowns />
      <OtherInputTypes />
      <Buttons />
      <hr />
      <YourForm />
    </div>
  );
}
