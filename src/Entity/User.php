<?php

namespace App\Entity;

use Symfony\Component\Security\Core\User\UserInterface;

use Doctrine\ORM\Mapping as ORM;

use App\Entity\Helper\ModificationDateTrait;

use Doctrine\Common\Collections\{
    Collection,
    ArrayCollection
};

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="user__users")
 * @ORM\HasLifecycleCallbacks
 */
class User implements UserInterface
{
    use ModificationDateTrait;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    protected $id;
    /**
     * @ORM\Column(type="string", length=50, unique=true)
     */
    protected $username;
    /**
     * @ORM\Column(type="string", length=100, unique=true)
     */
    protected $email;
    /**
     * @ORM\Column(type="string", length=150)
     */
    protected $password;

    protected $salt = '';
    /**
     * @ORM\Column(type="array")
     */
    protected $roles;

    public function __construct()
    {
        $this->roles = new ArrayCollection();
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setSalt(string $salt): self
    {
        $this->salt = $salt;

        return $this;
    }

    public function getSalt(): string
    {
        return $this->salt;
    }

    public function setRoles(array $roles = []): self
    {
        $this->roles = new ArrayCollection($roles);

        return $this;
    }

    public function getRoles(): Collection
    {
        return $this->roles;
    }

    public function eraseCredentials()
    {
        return true;
    }
}