import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json();


    if (!data || !data.topic) {
      throw new Error("Topic data is missing or incorrect");
    }

    return data.topic;
  } catch (error) {
    console.error("Error fetching topic:", error);
    return null;
  }
};

export default async function EditTopic({ params }) {
  const topic = await getTopicById(params.id);

  if (!topic) {
    return <div>Error loading topic</div>;
  }

  return <EditTopicForm {...topic} />;
}

const data = await res.json();
console.log("API Response:", data);
