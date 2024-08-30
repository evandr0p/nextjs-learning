// src/pages/page.tsx

"use client";

import "../styles/globals.css";

import React, { useState, useCallback } from "react";

const HomePage: React.FC = () => {
  return (
    <div data-theme="emerald">
      <div className="hero bg-base-200 min-h-screen bg-[url('/background-effect.jpg')] bg-repeat bg-cover h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <img src="/logo.jpg" />
          <div className="hero-content flex-col lg:flex-col">
            <h1 className="text-5xl font-bold">String Squad is now a thing!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a className="link" href="/free.plan">
              <button className="btn btn-secondary">Get Started</button>
            </a>
          </div>
        </div>
      </div>

      <div
        className="hero bg-base-200 min-h-screen"
        style={{
          backgroundImage: "url('/tennis-ball-motion-blur-small.png')",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-900">Login now!</h1>
            <p className="py-6 text-2xl text-gray-50">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <a className="link" href="/free.plan">
                  <button className="btn btn-warning">Login</button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <img src="/symbol-transparent.png" />
          <div>
            <h1 className="text-5xl font-bold text-center">
              Find same characteristics and save money!
            </h1>
            <p className="py-6 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi fugiat ut assumenda excepturi exercitationem et in
              fugiat ut assumenda excepturi exercitationem deleniti eaque aut
              repudiandae et a id nisi.
            </p>
            <div className=" text-center">
              <a className="link" href="/free.plan">
                <button className="btn btn-secondary">Check it out!</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/clay-court-unfocus-small.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              What you are waiting for?
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a className="link" href="/free.plan">
              <button className="btn btn-secondary">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
