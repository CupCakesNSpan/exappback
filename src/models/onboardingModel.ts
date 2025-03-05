import { v4 as uuidv4 } from 'uuid';
import Knex from "knex";
import { Knex as KnexType } from "knex";
import config from "../../knexfile";

export class OnboardingModel {
    private knexUser: KnexType;

    constructor(knexInstance?: KnexType) {
        this.knexUser = knexInstance ?? Knex(config[process.env.NODE_ENV || "development"]);
    }

    // TODO Update with the correct types
    public async getOnboardingStatus(userId: string): Promise<string> {
        // query the database here to get the onboarding status for the specific userId

        return "Doing something";
    }

    public async updateOnboardingStatus(userId: string, stepName: string): Promise<string> {
        // query the database here to update the onboarding status for the specific userId and stepName

        return "Doing something else";
    }
}