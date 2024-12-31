'use client';
import "./globals.css";
import Nav from "@/components/Nav"
import PaginationReducer from "@/redux/PaginationReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

export default function RootLayout({ children }) {
  const store = configureStore({
    reducer: {
      paginate: PaginationReducer
    }
  });
  return (
    <html lang="en">
      <body
        className="h-screen w-full flex flex-col"
      >
        <Provider store={store}>
          <Nav />
          <div className="flex-grow">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
