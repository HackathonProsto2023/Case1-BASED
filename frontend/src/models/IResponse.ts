export default interface IResponse {
    id: number;
    applicantId: number;
    applicantName: string;
    vacancyId: number;
    vacancyName: string;
    testResult: number;
    date: Date;
    status: string;
    comment: string;
}