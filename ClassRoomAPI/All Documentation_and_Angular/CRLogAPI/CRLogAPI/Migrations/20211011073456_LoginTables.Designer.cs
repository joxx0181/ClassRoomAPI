﻿// <auto-generated />
using CRLogAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CRLogAPI.Migrations
{
    [DbContext(typeof(LoginDBContext))]
    [Migration("20211011073456_LoginTables")]
    partial class LoginTables
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CRLogAPI.Models.DbUser", b =>
                {
                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("HashedPassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("Salt")
                        .IsRequired()
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Username");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CRLogAPI.Models.UserLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("LogTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StatusMessage")
                        .IsRequired()
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Token")
                        .IsRequired()
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("UserChoice")
                        .IsRequired()
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("Id");

                    b.ToTable("UserLogs");
                });
#pragma warning restore 612, 618
        }
    }
}
