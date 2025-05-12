## sql

CREATE SCHEMA `node_crude` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci ;

### table

CREATE TABLE `node_crude`.`users` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;
