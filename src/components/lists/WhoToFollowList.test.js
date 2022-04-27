import WhoToFollowList from './WhoToFollowList';
import peopleData from "./people-data.json";
import {act, create, render, screen} from "react-test-renderer";
import {HashRouter} from "react-router-dom";
import axios, {AxiosResponse} from 'axios';
import '@testing-library/jest-dom/extend-expect.js';
import React from 'react';

const MOCKED_PEOPLE = [
    {
        _id: "123",
        username: "test",
        password: "bob123",
        email: "bob@123.com",
        salary: "50000"
    },
    {
        _id: "2",
        username: "test2",
        password: "bob123",
        email: "bob@123.com",
        salary: "50000"
    },
    {
        _id: "3",
        username: "test3",
        password: "bob1234",
        email: "bob3@123.com",
        salary: "500000"
    },
    {
        _id: "4",
        username: "test4",
        password: "bob12345",
        email: "bob4@123.com",
        salary: "60000"
    }
]

describe('')