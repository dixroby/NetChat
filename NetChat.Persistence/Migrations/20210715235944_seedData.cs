using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NetChat.Persistence.Migrations
{
    public partial class seedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "ChannelId", "Description", "Name" },
                values: new object[] { new Guid("9995b226-584f-4c2d-9dc3-3b81f6d0105c"), "DotNetCore full stack", "DotNetCore" });

            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "ChannelId", "Description", "Name" },
                values: new object[] { new Guid("fc6f119a-28a2-4fb2-a3fc-8731264b8c43"), "Python Developer", "Python" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "ChannelId",
                keyValue: new Guid("9995b226-584f-4c2d-9dc3-3b81f6d0105c"));

            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "ChannelId",
                keyValue: new Guid("fc6f119a-28a2-4fb2-a3fc-8731264b8c43"));
        }
    }
}
