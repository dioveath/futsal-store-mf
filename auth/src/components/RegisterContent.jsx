import React from "react";

export default function RegisterContent() {
  return (
    <main class="h-screen w-screen flex justify-center items-center bg-green-500">
      <div class="bg-gray-100 flex flex-col justify-center items-center rounded-md shadow-xl">
        <form action="#" class="flex flex-col gap-4 p-4 rounded-xl">
          <h1 class="text-2xl font-bold">Register</h1>
          <input type="text" placeholder="Username" class="border-2 border-gray-200 rounded-md p-2" />
          <input type="password" placeholder="Password" class="border-2 border-gray-200 rounded-md p-2" />
          <input type="password" placeholder="Confirm Password" class="border-2 border-gray-200 rounded-md p-2" />
          <button class="bg-green-500 text-white px-4 py-2 rounded-md">Login</button>
        </form>
      </div>
    </main>
  );
}
