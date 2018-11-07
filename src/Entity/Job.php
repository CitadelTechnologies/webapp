<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

use App\Entity\Helper\ModificationDateTrait;

/**
 * @ORM\Entity(repositoryClass="App\Repository\JobRepository")
 * @ORM\Table(name="project__jobs")
 */
class Job
{
    use ModificationDateTrait;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    protected $id;
    /**
     * @ORM\Column(type="string", length=80)
     */
    protected $title;
    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $description;
    /**
     * @ORM\ManyToOne(targetEntity="Project")
     */
    protected $project;
    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(nullable=true)
     */
    protected $user;

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setProject(Project $project): self
    {
        $this->project = $project;
        
        return $this;
    }

    public function getProject(): Project
    {
        return $this->project;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }
}