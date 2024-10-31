import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, page}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={page} target={'_blank'}>
          <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
      </a>
    </Col>
  )
}