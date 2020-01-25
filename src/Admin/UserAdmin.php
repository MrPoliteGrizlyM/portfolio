<?php

namespace App\Admin;

use App\Entity\User;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserAdmin extends AbstractAdmin
{
    private $passwordEncoder;

    public function __construct(string $code, string $class, string $baseControllerName, UserPasswordEncoderInterface $passwordEncoder)
    {
        parent::__construct($code, $class, $baseControllerName);
        $this->passwordEncoder = $passwordEncoder;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper->with('Credentials', ['class' => 'col-md-4'])
                   ->add('username', TextType::class)
                   ->add('password', PasswordType::class)->end();
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('username');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier("id")
            ->addIdentifier('username')
            ->addIdentifier('roles');
    }

    public function prePersist($object)
    {
        $object->setRoles([User::ROLE_ADMIN]);
        $object->setPassword($this->passwordEncoder
                                    ->encodePassword($object, $object->getPassword()));

    }

    public function preUpdate($object)
    {
        $object->setRoles([User::ROLE_ADMIN]);
        $object->setPassword($this->passwordEncoder
            ->encodePassword($object, $object->getPassword()));
    }
}
