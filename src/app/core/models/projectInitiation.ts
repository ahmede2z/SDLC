export interface proInit {
    date:                  DateClass;
    projectInformation:    string;
    projectManager:        string;
    projectObjectives:     string;
    projectScopeStatement: string;
    projectTitle:          string;
}

export interface DateClass {
    startDate: Date;
    endDate:   Date;
}