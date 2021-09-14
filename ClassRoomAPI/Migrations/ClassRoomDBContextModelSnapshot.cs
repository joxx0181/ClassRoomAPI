﻿// <auto-generated />
using ClassRoomAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ClassRoomAPI.Migrations
{
    [DbContext(typeof(ClassRoomDBContext))]
    partial class ClassRoomDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ClassRoomAPI.Models.LightCondition", b =>
                {
                    b.Property<int>("LightId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Light")
                        .HasColumnType("int");

                    b.Property<string>("LightComment")
                        .IsRequired()
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("LightId");

                    b.ToTable("LightConditions");
                });

            modelBuilder.Entity("ClassRoomAPI.Models.NoiseLevel", b =>
                {
                    b.Property<int>("NoiseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Noise")
                        .HasColumnType("int");

                    b.Property<string>("NoiseComment")
                        .IsRequired()
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("NoiseId");

                    b.ToTable("NoiseLevels");
                });

            modelBuilder.Entity("ClassRoomAPI.Models.Temperature", b =>
                {
                    b.Property<int>("TempId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Temp")
                        .HasColumnType("float");

                    b.Property<string>("TempComment")
                        .IsRequired()
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("TempTime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TempId");

                    b.ToTable("Temperatures");
                });
#pragma warning restore 612, 618
        }
    }
}
