export interface ProgressItem {
    title: string;
    status: "done" | "pending" | "in progress" | "to do" | "closed";
  }
  
  export const getProgressStats = (items: ProgressItem[]) => {
    const total = items.length;
    const done = items.filter((item) => item.status === "done" || item.status === "closed").length;
    const inProgress = items.filter((item) => item.status === "in progress").length;
    const pending = items.filter((item) => item.status === "pending" || item.status === "to do").length;
  
    const percent = Math.round((done / total) * 100);
    return { total, done, inProgress, pending, percent };
  };
  