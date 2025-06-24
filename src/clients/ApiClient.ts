
const clientConnectionBase = "https://qpsir7sbf1.execute-api.us-east-1.amazonaws.com/v1/";

const getOptionsForClientWithoutAuth = (method: string, body: any): RequestInit => {
    return {
        method: method,
        body: body ? JSON.stringify(body) : null,
    } as RequestInit;
};

export const addToMailingList = async (emailAddress: string) => {
    await fetch(clientConnectionBase + "mailinglist/", getOptionsForClientWithoutAuth("POST", {"email": emailAddress}));
}

export const isAlreadyOnMailingList = async(emailAddress: string):Promise<boolean> => {
    const response = await fetch(clientConnectionBase + "mailinglistcheck?email=" + emailAddress, getOptionsForClientWithoutAuth("GET", null)).then((res) => res.json());
    return response.isAlreadyOnMailingList;
}