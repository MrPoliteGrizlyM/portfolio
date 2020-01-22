<?php
/**
 * Created by PhpStorm.
 * User: mrpolitegrizly
 * Date: 1/22/20
 * Time: 2:22 PM
 */

namespace App\Admin;


use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Ramsey\Uuid\Uuid;


class ProjectAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper->with('Title and status', ['class'=> 'col-md-4'])
                   ->add('title', TextType::class)
                   ->add('isActive')->end();

        $formMapper->with('Content', ['class'=> 'col-md-10'])
                    ->add('content', TextareaType::class)
                    ->add('image')->end();
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('id')
                       ->add('title')
                       ->add('content')
                       ->add('isActive');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('id')
                   ->addIdentifier('title')
                   ->addIdentifier('content','html', [
                       'truncate' => [
                           'length' => 50,
                           'preserve' => true,
                           'separator' => '...'
                       ]
                   ])
                   ->addIdentifier('isActive');
    }
}

