using Profile.Backend.Datalayer;
using System;
using System.Data;
using System.Data.SqlClient;
using Xunit;

namespace Profile.Backend.Tests
{
    public class DataLayerTests
    {
        [Fact]
        public void TestDBConnection()
        {
            Assert.True(Datalayer.DataModel.GetConnectionString() != null);
        }

        
    }

    public class IntegrationTests
    {
        [Fact]
        public void RemoveAllFromDB()
        {
            string query = @"DELETE FROM ProfileInfo;";

            try
            {
                SqlConnection connection = new SqlConnection(DataModel.GetConnectionString());
                SqlCommand command = new SqlCommand(query, connection);

                connection.Open();

                SqlDataAdapter adaptor = new SqlDataAdapter
                {
                    InsertCommand = new SqlCommand(query, connection)
                };
                adaptor.InsertCommand.ExecuteNonQuery();

                command.Dispose();
                connection.Close();

                Console.Write("All Users removed from ProfileInfo Database.");
            }
            catch(Exception err)
            {
                Console.Write(err.Message.ToString());
            }
        }

        [Theory]
        [InlineData("https://avatars2.githubusercontent.com/u/5124543?s=460&v=4", "Tower Insurance", "Sam Muir")]
        public void AddUserToDBTest(string img, string company, string userName)
        {
            var newUser = new User
            {
                Img = img,
                Company = company,
                UserName = userName
            };

            string query = @"Insert into ProfileInfo([UserName],[Img],[Company])
                values ('@UserName', '@Img', '@Company')";

            try
            {
                SqlConnection connection = new SqlConnection(DataModel.GetConnectionString());
                SqlCommand command = new SqlCommand(query, connection);

                command.Parameters.AddWithValue("@UserName", newUser.UserName);
                command.Parameters.AddWithValue("@Img", newUser.Img);
                command.Parameters.AddWithValue("@Company",newUser.Company);

                connection.Open();

                SqlDataAdapter adaptor = new SqlDataAdapter
                {
                    InsertCommand = new SqlCommand(query, connection)
                };
                adaptor.InsertCommand.ExecuteNonQuery();

                command.Dispose();
                connection.Close();
            }
            catch (Exception err)
            {
                Console.Write(err.Message.ToString());
            }
            

        }
    }
}
