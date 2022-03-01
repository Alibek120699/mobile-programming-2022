import { useQuery } from "react-query";

export const useTaskList = () => {
  const { data: tasks = [], isLoading } = useQuery("task-list", () =>
    fetch("http://localhost:5000/tasks").then((res) => res.json())
  );
  return { tasks, isLoading };
};

export const useTaskDetail = (id) => {
  const { data: task, isLoading } = useQuery(
    ["task-detail", id],
    () => fetch(`http://localhost:5000/tasks/${id}`).then((res) => res.json()),
    {
      enabled: !!id, // is disabled if id=0
    }
  );
  return { task, isLoading };
};
