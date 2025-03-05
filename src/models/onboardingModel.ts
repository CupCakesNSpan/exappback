import { v4 as uuidv4 } from 'uuid';
import Knex from "knex";
import { Knex as KnexType } from "knex";
import config from "../../knexfile";

export class OnboardingModel {
    private knexUser: KnexType;

    constructor(knexInstance?: KnexType) {
        this.knexUser = knexInstance ?? Knex(config[process.env.NODE_ENV || "development"]);
    }
}