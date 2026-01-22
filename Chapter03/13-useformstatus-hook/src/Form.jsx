import { useFormStatus } from "react-dom";

function SimpleSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Data"}
    </button>
  );
}

function Form() {
  const handleAction = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <form action={handleAction}>
      {/* Add any form inputs here if needed */}
      <p>Click the button to simulate saving data.</p>
      <SimpleSubmitButton /> {/* This button uses useFormStatus */}
    </form>
  );
}

export default Form;
