using MediatR;
using Microsoft.EntityFrameworkCore;
using NetChat.Domain;
using NetChat.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace NetChat.Aplication
{
    public class Details
    {
        public class Query : IRequest<Channel>
        {
            public Guid ChannelId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Channel>
        {
            private DataContext _context;
            public Handler(DataContext dataContext)
            {
                _context = dataContext ?? throw new ArgumentNullException();
            }
            public async Task<Channel> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Channels.FindAsync(request.ChannelId);
            }
        }
    }
}