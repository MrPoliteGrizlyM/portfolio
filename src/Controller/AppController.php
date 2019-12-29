<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/app", name="app")
 */
class AppController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="_home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('app/index.html.twig');
    }
}
