
const ProjectCard = ({imgURL, project, changeBigImage, bigShoeImg}) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL) {
            changeBigImage(project)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={project.thumbnail} alt="shoe-thumbnail" width={127} height={103} className="object-contain"/>
        </div>
    </div>
  )
}

export default ProjectCard