<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

use App\Entity\Helper\ModificationDateTrait;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 * @ORM\Table(name="project__projects")
 * @ORM\HasLifecycleCallbacks
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

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDescription(): string
    {
        return $this;
    }
}