<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class FrontController extends Controller
{
    /**
     * @Route("/", name="homepage", methods={"GET"})
     */
    public function homepage()
    {
        return $this->render('front/homepage.html.twig');
    }
}