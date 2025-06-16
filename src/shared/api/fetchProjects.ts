export async function fetchProjects() {
  const res = await fetch("https://api.test.cyberia.studio/api/v1/projects");

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  return data.items;
}
