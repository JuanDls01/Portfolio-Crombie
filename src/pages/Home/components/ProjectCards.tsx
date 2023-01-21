import ProductCard from "./ProductCard";
import { useEffect } from "react";
import CardsProgress from "./CardsProgress";
import { useProductContext } from "../../../Context/ProductContext";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    name: "project 1",
    description: "description",
    categoryName: "AWS project",
  },
  {
    id: 2,
    name: "project 3",
    description: "description",
    projectEmail: "juanidls333@gmail.com",
    categoryName: "AWS project",
  },
  {
    id: 3,
    name: "project 1",
    description: "description",
    categoryName: "AWS project",
  },
  {
    id: 4,
    name: "project 3",
    description: "description",
    projectEmail: "juanidls333@gmail.com",
    categoryName: "AWS project",
  },
];

const ProjectCards = () => {
  const { products } = useProductContext();
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <div className='h-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-center justify-items-center'>
      {projects.length === 0 ? (
        <CardsProgress />
      ) : (
        projects.map((product, index) => {
          return (
            <ProjectCard
              key={index}
              id={product.id}
              name={product.name}
              categoryName={product.categoryName}
            />
          );
        })
      )}
    </div>
  );
};
export default ProjectCards;
