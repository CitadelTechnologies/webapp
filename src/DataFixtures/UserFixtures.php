<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use App\Entity\User;

class UserFixtures extends Fixture
{
    /** @var UserPasswordEncoderInterface **/
    protected $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $users = require_once(__DIR__.'/fixtures/users.php');

        foreach ($users as $data) {
            $user = new User();
            $user
                ->setId($data['id'])
                ->setUsername($data['username'])
                ->setEmail($data['email'])
                ->setPassword($this->encoder->encodePassword($user, $data['password']))
                ->setRoles($data['roles'])
            ;
            $manager->persist($user);
            $this->setReference("user-{$user->getId()}", $user);
        }
        $manager->flush();
    }
}
