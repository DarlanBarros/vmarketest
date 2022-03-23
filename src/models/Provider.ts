import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('providers')
class Provider {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome_vendedor: string;

    @Column()
    email_vendedor: string;

    @Column()
    cnpj: string;

    @Column()
    razao_social: string;

    @Column()
    nome_fantasia: string;

    @Column()
    telefone: string;

    @Column()
    celular_vendedor: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Provider;
