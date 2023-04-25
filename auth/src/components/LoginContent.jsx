import React from "react";

export default function LoginContent() {
  return (
    <main class="h-screen w-screen flex justify-center items-center bg-green-500 ">
      <div class="bg-gray-100 flex flex-col justify-center items-center rounded-md shadow-xl w-md">
        <form action="#" class="flex flex-col gap-4 p-4 rounded-xl">
          <h1 class="text-2xl font-bold">Login</h1>
          <input type="text" placeholder="Username" class="border-2 border-gray-200 rounded-md p-2" />
          <input type="password" placeholder="Password" class="border-2 border-gray-200 rounded-md p-2" />
          <button class="bg-green-500 text-white px-4 py-2 rounded-md">Login</button>
          <a href="signup.html" class="text-xs">
            Not Registerd yet!{" "}
          </a>
          <a href="index.html" class="text-sm font-semibold text-green-500">
            Home{" "}
          </a>
        </form>
      </div>
    </main>
  );
}
