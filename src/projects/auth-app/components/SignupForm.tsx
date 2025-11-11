import { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data.message);
      alert("Signup successful!");
      setEmail("");
      setPassword("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      alert(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col gap-3 p-4 border rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold">Signup</h2>
      <input
        className="border p-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-green-600 text-white rounded p-2">Signup</button>
    </form>
  );
};

export default SignupForm;
