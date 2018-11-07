<?php

namespace App\Manager;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use App\Entity\User;

class UserManager
{
    /** @var EntityManagerInterface **/
    protected $em;
    /** @var UserPasswordEncoderInterface **/
    protected $encoder;

    public function __construct(EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {
        $this->em = $em;
        $this->encoder = $encoder;
    }

    public function createUser(string $username, string $email, string $password): User
    {
        $user = new User();
        $user
            ->setUsername($username)
            ->setEmail($email)
            ->setPassword($this->encoder->encodePassword($user, $password))
        ;
        $this->em->persist($user);
        $this->em->flush();
    }
}