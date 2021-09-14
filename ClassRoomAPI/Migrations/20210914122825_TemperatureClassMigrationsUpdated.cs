using Microsoft.EntityFrameworkCore.Migrations;

namespace ClassRoomAPI.Migrations
{
    public partial class TemperatureClassMigrationsUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TempTime",
                table: "Temperatures",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TempTime",
                table: "Temperatures");
        }
    }
}
