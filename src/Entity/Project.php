<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

use App\Entity\Helper\ModificationDateTrait;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 * @ORM\Table(name="project__projects")
 */
class Project
{
    use ModificationDateTrait;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    protected $id;
    /**
     * @ORM\Column(type="string", length=80, unique=true)
     */
    protected $name;
    /**
     * @ORM\Column(type="text")
     */
    protected $description;
}