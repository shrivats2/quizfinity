export const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Expense Dashboard</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    
    <!-- Chart.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    
    <!-- Custom CSS -->
    <style>
        :root {
            --primary-green: #2D6A4F;
            --secondary-green: #40916C;
            --light-green: #74C69D;
            --dark-green: #1B4332;
            --background: #E9F5F0;
        }

        body {
            background-color: var(--background);
        }

        /* Sidebar for larger screens */
        .sidebar {
            width: 250px;
            height: 100vh;
            background-color: var(--primary-green);
            padding: 20px;
            color: white;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        .sidebar .item {
            padding: 10px 15px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .sidebar .item:hover, .sidebar .item.active {
            background-color: var(--secondary-green);
            border-radius: 5px;
        }

        /* Page content with margin when sidebar is fixed */
        .page-content {
            flex-grow: 1;
            margin-left: 250px;
            padding: 20px;
            transition: margin 0.3s ease;
        }

        /* Header */
        .header {
            font-size: 24px;
            font-weight: bold;
            color: var(--dark-green);
        }

        /* Responsive: Hide sidebar for small screens */
        @media (max-width: 767px) {
            .sidebar {
                display: none;
            }

            .page-content {
                margin-left: 0;
            }

            .hamburger {
                display: block;
            }
        }

        .card {
            border: none;
            border-radius: 10px;
            background: white;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        .btn-success {
            background-color: var(--secondary-green);
            border: none;
        }

        .btn-success:hover {
            background-color: var(--dark-green);
        }
        
        .card-chart {
            height: 100%;
        }
        
        .card-header-custom {
            background-color: var(--light-green);
            color: var(--dark-green);
            border-radius: 10px 10px 0 0 !important;
        }
        
        .feedback-list .list-group-item {
            border-left: none;
            border-right: none;
            border-top: none;
            padding: 15px 0;
        }
        
        .feedback-list .list-group-item:last-child {
            border-bottom: none;
        }
        
        .user-avatar {
            width: 40px;
            height: 40px;
            background-color: var(--light-green);
            color: var(--dark-green);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="d-flex">
        <!-- Sidebar -->
        <div class="sidebar d-none d-md-flex flex-column">
            <div class="fs-3 fw-bold text-decoration-underline">
                <em>CashMate</em>
            </div>
            <ul class="list-unstyled mt-3 d-flex flex-column gap-3">
                <a class="text-decoration-none text-white" href="./Untitled-2.html"><li class="item active"><i class="bi bi-house-door-fill me-2"></i> Home</li></a>
                <a class="text-decoration-none text-white" href="./insights.html"><li class="item"><i class="bi bi-graph-up-arrow me-2"></i> Insights</li></a>
                <a class="text-decoration-none text-white" href="./categories.html"><li class="item"><i class="bi bi-tags me-2"></i> Categories</li></a>
                <a class="text-decoration-none text-white" href="./feedback.html"><li class="item"><i class="bi bi-patch-question-fill me-2"></i> Feedback</li></a>
            </ul>
        </div>

        <!-- Mobile Sidebar (Offcanvas) -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileSidebar">
            <div class="offcanvas-header bg-success text-white">
                <h5 class="offcanvas-title">Menu</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body bg-light">
                <ul class="list-unstyled">
                    <li class="item"><i class="bi bi-house-door-fill me-2"></i> Home</li>
                    <li class="item"><i class="bi bi-graph-up-arrow me-2"></i> Insights</li>
                    <li class="item"><i class="bi bi-tags me-2"></i> Categories</li>
                    <li class="item"><i class="bi bi-patch-question-fill me-2"></i> Feedback</li>
                </ul>
            </div>
        </div>

        <!-- Main Content -->
        <div class="page-content">
            <!-- Hamburger Menu for Mobile -->
            <button class="btn btn-outline-success d-md-none mb-3" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar">
                <i class="bi bi-list"></i> Menu
            </button>

            <div class="header">Dashboard</div>

            <!-- Cards Row -->
            <div class="row g-3 mt-3">
                <div class="col-md-6 col-lg-3">
                    <div class="card p-3">
                        <h6 class="d-flex justify-content-between">
                            Total Customers <i class="bi bi-arrow-up"></i>
                        </h6>
                        <h2>+4,786</h2>
                        <span class="text-success">+20%</span>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card p-3">
                        <h6 class="d-flex justify-content-between">
                            Total Categories <i class="bi bi-tags"></i>
                        </h6>
                        <h2>217</h2>
                        <span class="text-muted">+0%</span>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card p-3">
                        <h6 class="d-flex justify-content-between">
                            Total Spendings <i class="bi bi-cash-coin"></i>
                        </h6>
                        <h2>4,786</h2>
                        <span class="text-danger">+13%</span>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card p-3">
                        <h6 class="d-flex justify-content-between">
                            Total Businesses <i class="bi bi-buildings-fill"></i>
                        </h6>
                        <h2>500</h2>
                        <span class="text-primary">+5%</span>
                    </div>
                </div>
            </div>
            
            <!-- Chart and Feedback Section -->
            <div class="row g-3 mt-3">
                <!-- Donut Chart -->
                <div class="col-md-6">
                    <div class="card card-chart">
                        <div class="card-header card-header-custom py-3">
                            <h5 class="mb-0"><i class="bi bi-pie-chart-fill me-2"></i>Expense Categories</h5>
                        </div>
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <canvas id="expenseChart" style="width:100%; max-height:300px;"></canvas>
                        </div>
                    </div>
                </div>
                
                <!-- Feedback List -->
                <div class="col-md-6">
                    <div class="card card-chart">
                        <div class="card-header card-header-custom py-3">
                            <h5 class="mb-0"><i class="bi bi-chat-left-text-fill me-2"></i>Recent Feedback</h5>
                        </div>
                        <div class="card-body p-3">
                            <ul class="list-group list-group-flush feedback-list">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="user-avatar me-3">JD</div>
                                        <div class="flex-grow-1">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="mb-0">John Doe</h6>
                                                <small class="text-muted">2 hours ago</small>
                                            </div>
                                            <p class="mb-0 text-muted">Love the new expense tracking feature!</p>
                                        </div>
                                    </div>
                                    <div class="text-end mt-2">
                                        <a href="./feedback.html?id=1" class="btn btn-sm btn-success">Reply</a>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="user-avatar me-3">AS</div>
                                        <div class="flex-grow-1">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="mb-0">Amanda Smith</h6>
                                                <small class="text-muted">Yesterday</small>
                                            </div>
                                            <p class="mb-0 text-muted">Could you add a dark mode option?</p>
                                        </div>
                                    </div>
                                    <div class="text-end mt-2">
                                        <a href="./feedback.html?id=2" class="btn btn-sm btn-success">Reply</a>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="user-avatar me-3">RJ</div>
                                        <div class="flex-grow-1">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="mb-0">Robert Johnson</h6>
                                                <small class="text-muted">3 days ago</small>
                                            </div>
                                            <p class="mb-0 text-muted">Really helpful for tracking my business expenses.</p>
                                        </div>
                                    </div>
                                    <div class="text-end mt-2">
                                        <a href="./feedback.html?id=3" class="btn btn-sm btn-success">Reply</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer bg-white text-center border-0">
                            <a href="./feedback.html" class="btn btn-success">View All Feedback</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Chart.js Script -->
    <script>
        // Set up the donut chart
        const ctx = document.getElementById('expenseChart').getContext('2d');
        const expenseChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Groceries", "Utilities", "Entertainment", "Transportation", "Dining"],
                datasets: [{
                    backgroundColor: [
                        "#40916C",  // Secondary green
                        "#74C69D",  // Light green
                        "#1B4332",  // Dark green
                        "#2D6A4F",  // Primary green
                        "#95D5B2"   // Extra light green
                    ],
                    data: [35, 25, 15, 15, 10]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: '#1B4332',
                        padding: 15
                    }
                },
                title: {
                    display: true,
                    text: "Monthly Expense Distribution",
                    fontColor: '#1B4332',
                    fontSize: 16,
                    padding: 20
                },
                cutoutPercentage: 65,
                animation: {
                    animateScale: true
                }
            }
        });
    </script>
</body>
</html>








<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Insights - CashMate</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    
    <!-- Chart.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    
    <!-- Custom CSS -->
    <style>
        :root {
            --primary-green: #2D6A4F;
            --secondary-green: #40916C;
            --light-green: #74C69D;
            --dark-green: #1B4332;
            --background: #E9F5F0;
        }

        body {
            background-color: var(--background);
        }

        /* Sidebar for larger screens */
        .sidebar {
            width: 250px;
            height: 100vh;
            background-color: var(--primary-green);
            padding: 20px;
            color: white;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        .sidebar .item {
            padding: 10px 15px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .sidebar .item:hover, .sidebar .item.active {
            background-color: var(--secondary-green);
            border-radius: 5px;
        }

        /* Page content with margin when sidebar is fixed */
        .page-content {
            flex-grow: 1;
            margin-left: 250px;
            padding: 20px;
            transition: margin 0.3s ease;
        }

        /* Header */
        .header {
            font-size: 24px;
            font-weight: bold;
            color: var(--dark-green);
        }

        /* Responsive: Hide sidebar for small screens */
        @media (max-width: 767px) {
            .sidebar {
                display: none;
            }

            .page-content {
                margin-left: 0;
            }

            .hamburger {
                display: block;
            }
        }

        .card {
            border: none;
            border-radius: 10px;
            background: white;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        .btn-success {
            background-color: var(--secondary-green);
            border: none;
        }

        .btn-success:hover {
            background-color: var(--dark-green);
        }
        
        .card-chart {
            height: 100%;
        }
        
        .card-header-custom {
            background-color: var(--light-green);
            color: var(--dark-green);
            border-radius: 10px 10px 0 0 !important;
        }
        
        .nav-tabs .nav-link {
            color: var(--dark-green);
            border: none;
            padding: 10px 20px;
            border-radius: 5px 5px 0 0;
            margin-right: 5px;
        }
        
        .nav-tabs .nav-link.active {
            background-color: var(--light-green);
            color: var(--dark-green);
            font-weight: bold;
            text-decoration: underline;
        }
        
        .table th {
            background-color: var(--light-green);
            color: var(--dark-green);
            border: none;
        }
        
        .table td {
            vertical-align: middle;
        }
        
        .table-hover tbody tr:hover {
            background-color: rgba(116, 198, 157, 0.1);
        }
        
        .search-container {
            position: relative;
            display: flex;
            align-items: center;
        }
        
        .search-container .search-icon {
            position: absolute;
            left: 10px;
            color: var(--secondary-green);
        }
        
        .search-container input {
            padding-left: 35px;
            border-radius: 20px;
            border: 1px solid var(--light-green);
            background-color: #fff;
        }
        
        .search-container input:focus {
            box-shadow: 0 0 0 0.25rem rgba(64, 145, 108, 0.25);
            border-color: var(--secondary-green);
        }
    </style>
</head>
<body>
    <div class="d-flex">
        <!-- Sidebar -->
        <div class="sidebar d-none d-md-flex flex-column">
            <div class="fs-3 fw-bold text-decoration-underline">
                <em>CashMate</em>
            </div>
            <ul class="list-unstyled mt-3 d-flex flex-column gap-3">
                <a class="text-decoration-none text-white" href="./Untitled-2.html"><li class="item"><i class="bi bi-house-door-fill me-2"></i> Home</li></a>
                <a class="text-decoration-none text-white" href="./insights.html"><li class="item active"><i class="bi bi-graph-up-arrow me-2"></i> Insights</li></a>
                <a class="text-decoration-none text-white" href="./categories.html"><li class="item"><i class="bi bi-tags me-2"></i> Categories</li></a>
                <a class="text-decoration-none text-white" href="./feedback.html"><li class="item"><i class="bi bi-patch-question-fill me-2"></i> Feedback</li></a>
            </ul>
        </div>

        <!-- Mobile Sidebar (Offcanvas) -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileSidebar">
            <div class="offcanvas-header bg-success text-white">
                <h5 class="offcanvas-title">Menu</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body bg-light">
                <ul class="list-unstyled">
                    <li class="item"><i class="bi bi-house-door-fill me-2"></i> Home</li>
                    <li class="item active"><i class="bi bi-graph-up-arrow me-2"></i> Insights</li>
                    <li class="item"><i class="bi bi-tags me-2"></i> Categories</li>
                    <li class="item"><i class="bi bi-patch-question-fill me-2"></i> Feedback</li>
                </ul>
            </div>
        </div>

        <!-- Main Content -->
        <div class="page-content">
            <!-- Hamburger Menu for Mobile -->
            <button class="btn btn-outline-success d-md-none mb-3" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar">
                <i class="bi bi-list"></i> Menu
            </button>

            <div class="header">Insights</div>
            
            <!-- Overview Cards -->
            <div class="row g-3 mt-3">
                <div class="col-md-4">
                    <div class="card p-3">
                        <h6 class="d-flex justify-content-between">
                            Average Spending <i class="bi bi-cash-stack"></i>
                        </h6>
                        <h2>Rs. 1,250</h2>
                        <span class="text-success">+5% this month</span>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-3">
                        <h6 class="d-flex justify-content-between">
                            Top Category <i class="bi bi-trophy"></i>
                        </h6>
                        <h2>Groceries</h2>
                        <span class="text-primary">35% of total spend</span>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-3">
                        <h6 class="d-flex justify-content-between">
                            Active Users <i class="bi bi-people-fill"></i>
                        </h6>
                        <h2>3,241</h2>
                        <span class="text-success">+12% this month</span>
                    </div>
                </div>
            </div>
            
            <!-- Tab Controls and Search -->
            <div class="row mt-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header card-header-custom py-3 d-flex justify-content-between align-items-center">
                            <ul class="nav nav-tabs border-0" id="insightTabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="customers-tab" data-bs-toggle="tab" data-bs-target="#customers" type="button" role="tab" aria-controls="customers" aria-selected="true">
                                        <i class="bi bi-person-fill me-2"></i>Customers
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="businesses-tab" data-bs-toggle="tab" data-bs-target="#businesses" type="button" role="tab" aria-controls="businesses" aria-selected="false">
                                        <i class="bi bi-building me-2"></i>Businesses
                                    </button>
                                </li>
                            </ul>
                            
                            <div class="search-container">
                                <i class="bi bi-search search-icon"></i>
                                <input type="text" class="form-control" placeholder="Search...">
                            </div>
                        </div>
                        
                        <div class="card-body">
                            <div class="tab-content" id="insightTabsContent">
                                <!-- Customers Tab -->
                                <div class="tab-pane fade show active" id="customers" role="tabpanel" aria-labelledby="customers-tab">
                                    <div class="table-responsive">
                                        <table class="table table-hover align-middle">
                                            <thead>
                                                <tr>
                                                    <th>Customer Name</th>
                                                    <th>Email</th>
                                                    <th>Top Category</th>
                                                    <th>Total Spending</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">JD</div>
                                                            John Doe
                                                        </div>
                                                    </td>
                                                    <td>john.doe@example.com</td>
                                                    <td>Groceries</td>
                                                    <td>Rs. 2,450.75</td>
                                                    <td><span class="badge bg-success">Active</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">MS</div>
                                                            Maria Smith
                                                        </div>
                                                    </td>
                                                    <td>maria.smith@example.com</td>
                                                    <td>Entertainment</td>
                                                    <td>Rs. 1,875.50</td>
                                                    <td><span class="badge bg-success">Active</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">RJ</div>
                                                            Robert Johnson
                                                        </div>
                                                    </td>
                                                    <td>robert.j@example.com</td>
                                                    <td>Transportation</td>
                                                    <td>Rs. 3,210.25</td>
                                                    <td><span class="badge bg-success">Active</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">EW</div>
                                                            Emily Wilson
                                                        </div>
                                                    </td>
                                                    <td>emily.w@example.com</td>
                                                    <td>Dining</td>
                                                    <td>Rs. 1,540.00</td>
                                                    <td><span class="badge bg-secondary">Inactive</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">MB</div>
                                                            Michael Brown
                                                        </div>
                                                    </td>
                                                    <td>michael.b@example.com</td>
                                                    <td>Utilities</td>
                                                    <td>Rs. 985.50</td>
                                                    <td><span class="badge bg-success">Active</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <!-- Pagination -->
                                    <nav aria-label="Page navigation" class="mt-3">
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                
                                <!-- Businesses Tab -->
                                <div class="tab-pane fade" id="businesses" role="tabpanel" aria-labelledby="businesses-tab">
                                    <div class="table-responsive">
                                        <table class="table table-hover align-middle">
                                            <thead>
                                                <tr>
                                                    <th>Business Name</th>
                                                    <th>Owned By</th>
                                                    <th>Industry</th>
                                                    <th>Total Spending</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">AC</div>
                                                            Acme Corporation
                                                        </div>
                                                    </td>
                                                    <td>John Doe</td>
                                                    <td>Software</td>
                                                    <td>Rs. 12,450.75</td>
                                                    <td><span class="badge bg-success">Active</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">GS</div>
                                                            Green Solutions
                                                        </div>
                                                    </td>
                                                    <td>Maria Smith</td>
                                                    <td>Renewable Energy</td>
                                                    <td>Rs. 9,875.50</td>
                                                    <td><span class="badge bg-success">Active</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">BC</div>
                                                            Blue Consulting
                                                        </div>
                                                    </td>
                                                    <td>Robert Johnson</td>
                                                    <td>Consulting</td>
                                                    <td>Rs. 15,210.25</td>
                                                    <td><span class="badge bg-success">Active</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">SF</div>
                                                            Sunny Farms
                                                        </div>
                                                    </td>
                                                    <td>Emily Wilson</td>
                                                    <td>Agriculture</td>
                                                    <td>Rs. 7,540.00</td>
                                                    <td><span class="badge bg-secondary">Inactive</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">MR</div>
                                                            Modern Retail
                                                        </div>
                                                    </td>
                                                    <td>Michael Brown</td>
                                                    <td>Retail</td>
                                                    <td>Rs. 11,985.50</td>
                                                    <td><span class="badge bg-success">Active</span></td>
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-success"><i class="bi bi-eye"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <!-- Pagination -->
                                    <nav aria-label="Page navigation" class="mt-3">
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Charts Row -->
            <div class="row g-3 mt-3">
                <!-- Spending Trends Chart -->
                <div class="col-lg-8">
                    <div class="card card-chart">
                        <div class="card-header card-header-custom py-3">
                            <h5 class="mb-0"><i class="bi bi-graph-up me-2"></i>Spending Trends (Last 6 Months)</h5>
                        </div>
                        <div class="card-body">
                            <canvas id="spendingTrendsChart" style="width:100%; height:300px;"></canvas>
                        </div>
                    </div>
                </div>
                
                <!-- Top Spending Categories -->
                <div class="col-lg-4">
                    <div class="card card-chart">
                        <div class="card-header card-header-custom py-3">
                            <h5 class="mb-0"><i class="bi bi-bar-chart-fill me-2"></i>Top Spending by Industry</h5>
                        </div>
                        <div class="card-body">
                            <canvas id="industrySpendingChart" style="width:100%; height:300px;"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Geographic Distribution -->
            <div class="row mt-3 mb-4">
                <div class="col-12">
                    <div class="card card-chart">
                        <div class="card-header card-header-custom py-3 d-flex justify-content-between">
                            <h5 class="mb-0"><i class="bi bi-globe me-2"></i>Regional Customer Distribution</h5>
                            <div>
                                <select class="form-select form-select-sm" style="background-color: var(--light-green); border: none; color: var(--dark-green);">
                                    <option selected>All Regions</option>
                                    <option>North India</option>
                                    <option>South India</option>
                                    <option>East India</option>
                                    <option>West India</option>
                                </select>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <canvas id="regionMapChart" style="width:100%; height:250px;"></canvas>
                                </div>
                                <div class="col-md-4">
                                    <h6 class="border-bottom pb-2 mb-3">Top Regions by Spending</h6>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>Mumbai</span>
                                        <span class="text-success fw-bold">Rs. 12,450</span>
                                    </div>
                                    <div class="progress mb-3" style="height: 8px;">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>Banglore</span>
                                        <span class="text-success fw-bold">Rs. 9,280</span>
                                    </div>
                                    <div class="progress mb-3" style="height: 8px;">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>Jaipur</span>
                                        <span class="text-success fw-bold">Rs. 7,320</span>
                                    </div>
                                    <div class="progress mb-3" style="height: 8px;">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>Indore</span>
                                        <span class="text-success fw-bold">Rs. 5,890</span>
                                    </div>
                                    <div class="progress mb-3" style="height: 8px;">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Chart.js Scripts -->
    <script>
        // Spending Trends Chart
        const trendCtx = document.getElementById('spendingTrendsChart').getContext('2d');
        const spendingTrendsChart = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['October', 'November', 'December', 'January', 'February', 'March'],
                datasets: [
                    {
                        label: 'Customer Spending',
                        data: [4200, 5100, 6500, 5900, 6300, 7100],
                        borderColor: '#40916C',
                        backgroundColor: 'rgba(64, 145, 108, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Business Spending',
                        data: [8500, 9200, 11500, 10800, 12300, 14500],
                        borderColor: '#1B4332',
                        backgroundColor: 'rgba(27, 67, 50, 0.1)',
                        tension: 0.3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'Rs. ' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });

        // Industry Spending Chart
        const industryCtx = document.getElementById('industrySpendingChart').getContext('2d');
        const industrySpendingChart = new Chart(industryCtx, {
            type: 'bar',
            data: {
                labels: ['Tech', 'Retail', 'Finance', 'Healthcare', 'Education'],
                datasets: [{
                    label: 'Average Monthly Spending',
                    data: [8500, 6200, 9100, 7400, 5300],
                    backgroundColor: [
                        '#40916C',
                        '#74C69D',
                        '#1B4332',
                        '#2D6A4F',
                        '#95D5B2'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'Rs. ' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
        
        // Placeholder for the region map chart - in a real app, this would use a geographic map library
        const regionCtx = document.getElementById('regionMapChart').getContext('2d');
        const regionMapChart = new Chart(regionCtx, {
            type: 'bar',
            data: {
                labels: ['West', 'Northeast', 'Midwest', 'South', 'International'],
                datasets: [{
                    label: 'Customer Distribution',
                    data: [32, 25, 18, 20, 5],
                backgroundColor: ['#40916C', '#74C69D', '#1B4332', '#2D6A4F', '#95D5B2'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
</script>

</body>
</html>











<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CashMate - Categories</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">

    <!-- Chart.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

    <!-- Custom CSS -->
    <style>
        :root {
            --primary-green: #2D6A4F;
            --secondary-green: #40916C;
            --light-green: #74C69D;
            --dark-green: #1B4332;
            --background: #E9F5F0;
        }

        body {
            background-color: var(--background);
        }

        /* Sidebar for larger screens */
        .sidebar {
            width: 250px;
            height: 100vh;
            background-color: var(--primary-green);
            padding: 20px;
            color: white;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        .sidebar .item {
            padding: 10px 15px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .sidebar .item:hover,
        .sidebar .item.active {
            background-color: var(--secondary-green);
            border-radius: 5px;
        }

        /* Page content with margin when sidebar is fixed */
        .page-content {
            flex-grow: 1;
            margin-left: 250px;
            padding: 20px;
            transition: margin 0.3s ease;
        }

        /* Header */
        .header {
            font-size: 24px;
            font-weight: bold;
            color: var(--dark-green);
        }

        /* Responsive: Hide sidebar for small screens */
        @media (max-width: 767px) {
            .sidebar {
                display: none;
            }

            .page-content {
                margin-left: 0;
            }

            .hamburger {
                display: block;
            }

            .categories-card {
                max-width: 400px;
                display: flex;
                justify-content: center;
            }
        }

        .card {
            border: none;
            border-radius: 10px;
            background: white;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
        }

        .btn-success {
            background-color: var(--secondary-green);
            border: none;
        }

        .btn-success:hover {
            background-color: var(--dark-green);
        }

        .btn-outline-success {
            color: var(--secondary-green);
            border-color: var(--secondary-green);
        }

        .btn-outline-success:hover {
            background-color: var(--secondary-green);
            color: white;
        }

        .card-header-custom {
            background-color: var(--light-green);
            color: var(--dark-green);
            border-radius: 10px 10px 0 0 !important;
        }

        .table-custom th {
            background-color: var(--light-green);
            color: var(--dark-green);
            border: none;
        }

        .table-custom td {
            vertical-align: middle;
        }

        .tab-content {
            padding: 20px 0;
        }

        .nav-tabs .nav-link {
            color: var(--dark-green);
            border: none;
            padding: 10px 20px;
            font-weight: 500;
        }

        .nav-tabs .nav-link.active {
            color: var(--dark-green);
            background-color: transparent;
            border-bottom: 3px solid var(--secondary-green);
        }

        .nav-tabs .nav-link:hover:not(.active) {
            border-bottom: 3px solid var(--light-green);
        }

        .modal-header {
            background-color: var(--light-green);
            color: var(--dark-green);
        }
    </style>
</head>

<body>
    <div class="d-flex">
        <!-- Sidebar -->
        <div class="sidebar d-none d-md-flex flex-column">
            <div class="fs-3 fw-bold text-decoration-underline">
                <em>CashMate</em>
            </div>
            <ul class="list-unstyled mt-3 d-flex flex-column gap-3">
                <a class="text-decoration-none text-white" href="./Untitled-2.html"><li class="item"><i class="bi bi-house-door-fill me-2"></i> Home</li></a>
                <a class="text-decoration-none text-white" href="./insights.html"><li class="item"><i class="bi bi-graph-up-arrow me-2"></i> Insights</li></a>
                <a class="text-decoration-none text-white" href="./categories.html"><li class="item active"><i class="bi bi-tags me-2"></i> Categories</li></a>
                <a class="text-decoration-none text-white" href="./feedback.html"><li class="item"><i class="bi bi-patch-question-fill me-2"></i> Feedback</li></a>
            </ul>
        </div>

        <!-- Mobile Sidebar (Offcanvas) -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileSidebar">
            <div class="offcanvas-header bg-success text-white">
                <h5 class="offcanvas-title">Menu</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body bg-light">
                <ul class="list-unstyled">
                    <li class="item"><i class="bi bi-house-door-fill me-2"></i> Home</li>
                    <li class="item"><i class="bi bi-graph-up-arrow me-2"></i> Insights</li>
                    <li class="item active"><i class="bi bi-tags me-2"></i> Categories</li>
                    <li class="item"><i class="bi bi-patch-question-fill me-2"></i> Feedback</li>
                </ul>
            </div>
        </div>

        <!-- Main Content -->
        <div class="page-content">
            <!-- Hamburger Menu for Mobile -->
            <button class="btn btn-outline-success d-md-none mb-3" data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebar">
                <i class="bi bi-list"></i> Menu
            </button>

            <!-- Header with Add Category button -->
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="header">Categories</div>
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                    <i class="bi bi-plus-circle me-2"></i>Add Custom Category
                </button>
            </div>

            <!-- Tabs for Top 10 and All Categories -->
            <div class="card categories-card">
                <div class="card-header card-header-custom">
                    <ul class="nav nav-tabs card-header-tabs border-0">
                        <li class="nav-item">
                            <a class="nav-link active" id="top10-tab" data-bs-toggle="tab" href="#top10">Top 10
                                Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="all-tab" data-bs-toggle="tab" href="#all">All Categories</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <!-- Top 10 Categories Tab -->
                        <div class="tab-pane fade show active" id="top10">
                            <div class="d-flex justify-content-end mb-3">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-outline-success active" id="barChartBtn">Bar
                                        Chart</button>
                                    <button type="button" class="btn btn-outline-success" id="pieChartBtn">Pie
                                        Chart</button>
                                </div>
                            </div>

                            <!-- Chart Container -->
                            <div style="height: 400px; position: relative;">
                                <canvas id="categoryChart"></canvas>
                            </div>
                        </div>

                        <!-- All Categories Tab -->
                        <div class="tab-pane fade" id="all">
                            <div class="table-responsive">
                                <table class="table table-hover table-custom">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Number of Customers</th>
                                            <th>Total Spending</th>
                                            <th>Average Spend</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Groceries</td>
                                            <td>3,542</td>
                                            <td>Rs. 152,680</td>
                                            <td>Rs. 43.10</td>

                                        </tr>
                                        <tr>
                                            <td>Utilities</td>
                                            <td>2,845</td>
                                            <td>Rs. 98,450</td>
                                            <td>Rs. 34.60</td>

                                        </tr>
                                        <tr>
                                            <td>Entertainment</td>
                                            <td>2,140</td>
                                            <td>Rs. 64,230</td>
                                            <td>Rs. 30.01</td>

                                        </tr>
                                        <tr>
                                            <td>Transportation</td>
                                            <td>1,985</td>
                                            <td>Rs. 72,340</td>
                                            <td>Rs. 36.44</td>

                                        </tr>
                                        <tr>
                                            <td>Dining</td>
                                            <td>1,820</td>
                                            <td>Rs. 58,750</td>
                                            <td>Rs. 32.28</td>

                                        </tr>
                                        <tr>
                                            <td>Shopping</td>
                                            <td>1,650</td>
                                            <td>Rs. 86,320</td>
                                            <td>Rs. 52.31</td>

                                        </tr>
                                        <tr>
                                            <td>Healthcare</td>
                                            <td>1,420</td>
                                            <td>Rs. 45,640</td>
                                            <td>Rs. 32.14</td>

                                        </tr>
                                        <tr>
                                            <td>Travel</td>
                                            <td>1,240</td>
                                            <td>Rs. 125,680</td>
                                            <td>Rs. 101.35</td>

                                        </tr>
                                        <tr>
                                            <td>Subscriptions</td>
                                            <td>1,150</td>
                                            <td>Rs. 34,520</td>
                                            <td>Rs. 30.02</td>

                                        </tr>
                                        <tr>
                                            <td>Education</td>
                                            <td>980</td>
                                            <td>Rs. 54,320</td>
                                            <td>Rs. 55.43</td>

                                        </tr>
                                        <tr>
                                            <td>Insurance</td>
                                            <td>840</td>
                                            <td>Rs. 67,450</td>
                                            <td>Rs. 80.30</td>

                                        </tr>
                                        <tr>
                                            <td>Home Maintenance</td>
                                            <td>720</td>
                                            <td>Rs. 42,680</td>
                                            <td>Rs. 59.28</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add Category Modal -->
    <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addCategoryModalLabel">Add Custom Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="addCategoryForm">
                        <div class="mb-3">
                            <label for="categoryName" class="form-label">Category Name</label>
                            <input type="text" class="form-control" id="categoryName" placeholder="Enter category name"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="categoryDescription" class="form-label">Description (Optional)</label>
                            <textarea class="form-control" id="categoryDescription" rows="3"
                                placeholder="Enter a brief description"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="categoryIcon" class="form-label">Icon (Optional)</label>
                            <select class="form-select" id="categoryIcon">
                                <option value="">Select an icon</option>
                                <option value="bi-basket">Shopping</option>
                                <option value="bi-cup-hot">Food & Drink</option>
                                <option value="bi-car-front">Transportation</option>
                                <option value="bi-house">Housing</option>
                                <option value="bi-heart-pulse">Healthcare</option>
                                <option value="bi-laptop">Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-success" id="submitCategory">Add Category</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Chart.js Script -->
    <script>
        // Data for charts
        const categories = ["Groceries", "Utilities", "Entertainment", "Transportation", "Dining",
            "Shopping", "Healthcare", "Travel", "Subscriptions", "Education"];
        const customerCounts = [3542, 2845, 2140, 1985, 1820, 1650, 1420, 1240, 1150, 980];
        const totalSpending = [152680, 98450, 64230, 72340, 58750, 86320, 45640, 125680, 34520, 54320];

        // Colors that match the theme
        const chartColors = [
            "#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2",
            "#B7E4C7", "#D8F3DC", "#1B4332", "#26603B", "#358855"
        ];

        // Initialize chart
        let categoryChart;

        // Function to create bar chart
        function createBarChart() {
            if (categoryChart) {
                categoryChart.destroy();
            }

            const ctx = document.getElementById('categoryChart').getContext('2d');
            categoryChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: categories,
                    datasets: [{
                        label: 'Total Spending (Rs. )',
                        data: totalSpending,
                        backgroundColor: chartColors,
                        borderColor: chartColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value) {
                                    return 'Rs. ' + value.toLocaleString();
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Top 10 Categories by Total Spending',
                            font: {
                                size: 16
                            },
                            color: '#1B4332',
                            padding: 20
                        },
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += 'Rs. ' + context.parsed.y.toLocaleString();
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }

        // Function to create pie chart
        function createPieChart() {
            if (categoryChart) {
                categoryChart.destroy();
            }

            const ctx = document.getElementById('categoryChart').getContext('2d');
            categoryChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: categories,
                    datasets: [{
                        data: totalSpending,
                        backgroundColor: chartColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Top 10 Categories by Total Spending',
                            font: {
                                size: 16
                            },
                            color: '#1B4332',
                            padding: 20
                        },
                        legend: {
                            position: 'right',
                            labels: {
                                color: '#1B4332'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed !== null) {
                                        label += 'Rs. ' + context.parsed.toLocaleString();
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }

        // Initialize with bar chart
        document.addEventListener('DOMContentLoaded', function () {
            createBarChart();

            // Switch between chart types
            document.getElementById('barChartBtn').addEventListener('click', function () {
                this.classList.add('active');
                document.getElementById('pieChartBtn').classList.remove('active');
                createBarChart();
            });

            document.getElementById('pieChartBtn').addEventListener('click', function () {
                this.classList.add('active');
                document.getElementById('barChartBtn').classList.remove('active');
                createPieChart();
            });

            // Handle add category form submission
            document.getElementById('submitCategory').addEventListener('click', function () {
                const categoryName = document.getElementById('categoryName').value;
                if (categoryName) {
                    alert('Category "' + categoryName + '" has been added successfully!');
                    document.getElementById('addCategoryForm').reset();
                    const modal = bootstrap.Modal.getInstance(document.getElementById('addCategoryModal'));
                    modal.hide();
                } else {
                    alert('Please enter a category name.');
                }
            });
        });
    </script>
</body>

</html>











<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Feedback Dashboard - CashMate</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    
    <!-- Custom CSS -->
    <style>
        :root {
            --primary-green: #2D6A4F;
            --secondary-green: #40916C;
            --light-green: #74C69D;
            --dark-green: #1B4332;
            --background: #E9F5F0;
        }

        body {
            background-color: var(--background);
        }

        /* Sidebar for larger screens */
        .sidebar {
            width: 250px;
            height: 100vh;
            background-color: var(--primary-green);
            padding: 20px;
            color: white;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        .sidebar .item {
            padding: 10px 15px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .sidebar .item:hover, .sidebar .item.active {
            background-color: var(--secondary-green);
            border-radius: 5px;
        }

        /* Page content with margin when sidebar is fixed */
        .page-content {
            flex-grow: 1;
            margin-left: 250px;
            padding: 20px;
            transition: margin 0.3s ease;
        }

        /* Header */
        .header {
            font-size: 24px;
            font-weight: bold;
            color: var(--dark-green);
        }

        /* Responsive: Hide sidebar for small screens */
        @media (max-width: 767px) {
            .sidebar {
                display: none;
            }

            .page-content {
                margin-left: 0;
            }

            .hamburger {
                display: block;
            }
        }

        .card {
            border: none;
            border-radius: 10px;
            background: white;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
        }

        .btn-success {
            background-color: var(--secondary-green);
            border: none;
        }

        .btn-success:hover {
            background-color: var(--dark-green);
        }
        
        .card-header-custom {
            background-color: var(--light-green);
            color: var(--dark-green);
            border-radius: 10px 10px 0 0 !important;
        }
        
        .feedback-item {
            border-bottom: 1px solid #eee;
            padding: 15px;
        }
        
        .feedback-item:last-child {
            border-bottom: none;
        }
        
        .user-avatar {
            width: 40px;
            height: 40px;
            background-color: var(--light-green);
            color: var(--dark-green);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-weight: bold;
        }
        
        .reply-form {
            display: none;
            padding: 15px;
            border-top: 1px solid #eee;
            background-color: #f9f9f9;
            border-radius: 0 0 10px 10px;
        }
        
        .reply-form.active {
            display: block;
        }
        
        .reply-item {
            padding-left: 40px;
            border-top: 1px dashed #eee;
            padding-top: 15px;
            margin-top: 10px;
            background-color: rgba(116, 198, 157, 0.1);
            border-radius: 5px;
            padding: 15px 15px 15px 55px;
            margin-top: 10px;
            position: relative;
        }
        
        .reply-item .user-avatar {
            position: absolute;
            left: 10px;
            top: 15px;
            background-color: var(--secondary-green);
        }
        
        .filter-options {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .filter-options .btn {
            background-color: white;
            color: var(--dark-green);
            border: 1px solid var(--light-green);
        }
        
        .filter-options .btn.active {
            background-color: var(--light-green);
            color: var(--dark-green);
        }
        
        .feedback-status {
            font-size: 12px;
            padding: 3px 8px;
            border-radius: 10px;
            display: inline-block;
        }
        
        .status-new {
            background-color: #e6f7ff;
            color: #0077cc;
        }
        
        .status-in-progress {
            background-color: #fff7e6;
            color: #fa8c16;
        }
        
        .status-resolved {
            background-color: #f6ffed;
            color: #52c41a;
        }
        
        .status-closed {
            background-color: #f5f5f5;
            color: #8c8c8c;
        }
        
        .feedback-search {
            position: relative;
        }
        
        .feedback-search .form-control {
            padding-left: 40px;
            border-radius: 20px;
            border: 1px solid var(--light-green);
        }
        
        .feedback-search .bi-search {
            position: absolute;
            left: 15px;
            top: 10px;
            color: var(--secondary-green);
        }
        
        .highlighted {
            background-color: rgba(116, 198, 157, 0.2);
            border-left: 4px solid var(--secondary-green);
        }
    </style>
</head>
<body>
    <div class="d-flex">
        <!-- Sidebar -->
        <div class="sidebar d-none d-md-flex flex-column">
            <div class="fs-3 fw-bold text-decoration-underline">
                <em>CashMate</em>
            </div>
            <ul class="list-unstyled mt-3 d-flex flex-column gap-3">
                <a class="text-decoration-none text-white" href="./Untitled-2.html"><li class="item"><i class="bi bi-house-door-fill me-2"></i> Home</li></a>
                <a class="text-decoration-none text-white" href="./insights.html"><li class="item"><i class="bi bi-graph-up-arrow me-2"></i> Insights</li></a>
                <a class="text-decoration-none text-white" href="./categories.html"><li class="item"><i class="bi bi-tags me-2"></i> Categories</li></a>
                <a class="text-decoration-none text-white" href="./feedback.html"><li class="item active"><i class="bi bi-patch-question-fill me-2"></i> Feedback</li></a>
            </ul>
        </div>

        <!-- Mobile Sidebar (Offcanvas) -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileSidebar">
            <div class="offcanvas-header bg-success text-white">
                <h5 class="offcanvas-title">Menu</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body bg-light">
                <ul class="list-unstyled">
                    <li class="item"><i class="bi bi-house-door-fill me-2"></i> Home</li>
                    <li class="item"><i class="bi bi-graph-up-arrow me-2"></i> Insights</li>
                    <li class="item"><i class="bi bi-tags me-2"></i> Categories</li>
                    <li class="item active"><i class="bi bi-patch-question-fill me-2"></i> Feedback</li>
                </ul>
            </div>
        </div>

        <!-- Main Content -->
        <div class="page-content">
            <!-- Hamburger Menu for Mobile -->
            <button class="btn btn-outline-success d-md-none mb-3" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar">
                <i class="bi bi-list"></i> Menu
            </button>

            <div class="header mb-4">Customer Feedback</div>
            
            <!-- Search and Filters -->
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <div class="feedback-search">
                        <i class="bi bi-search"></i>
                        <input type="text" class="form-control" placeholder="Search feedback..." id="searchInput">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="filter-options">
                        <button class="btn active" data-filter="all">All</button>
                        <button class="btn" data-filter="new">New</button>
                        <button class="btn" data-filter="in-progress">In Progress</button>
                        <button class="btn" data-filter="resolved">Resolved</button>
                        <button class="btn" data-filter="closed">Closed</button>
                    </div>
                </div>
            </div>
            
            <!-- Feedback List -->
            <div class="card">
                <div class="card-header card-header-custom d-flex justify-content-between align-items-center py-3">
                    <h5 class="mb-0"><i class="bi bi-chat-left-text-fill me-2"></i>All Feedback</h5>
                    <span class="badge bg-secondary">Total: 7</span>
                </div>
                <div class="card-body p-0">
                    <!-- Feedback Item 1 -->
                    <div class="feedback-item" id="feedback-1" data-status="new">
                        <div class="d-flex">
                            <div class="user-avatar me-3">JD</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">John Doe</h6>
                                    <div class="d-flex align-items-center">
                                        <span class="feedback-status status-new me-2">New</span>
                                        <small class="text-muted">2 hours ago</small>
                                    </div>
                                </div>
                                <p class="mb-2">Love the new expense tracking feature! It would be great if you could add the ability to take photos of receipts and auto-categorize them.</p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="badge bg-light text-dark me-1">#feature-request</span>
                                        <span class="badge bg-light text-dark">#receipts</span>
                                    </div>
                                    <button class="btn btn-sm btn-success reply-btn" data-feedback-id="1">Reply</button>
                                </div>
                            </div>
                        </div>
                        <!-- Reply Form -->
                        <div class="reply-form" id="reply-form-1">
                            <form id="replyForm1">
                                <div class="mb-3">
                                    <textarea class="form-control" rows="3" placeholder="Write your reply..." required></textarea>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <select class="form-select form-select-sm" style="width: auto;">
                                            <option value="in-progress">Mark as In Progress</option>
                                            <option value="resolved">Mark as Resolved</option>
                                            <option value="closed">Mark as Closed</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-sm btn-light me-2 cancel-reply" data-feedback-id="1">Cancel</button>
                                        <button type="submit" class="btn btn-sm btn-success submit-reply" data-feedback-id="1">Send Reply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <!-- Feedback Item 2 -->
                    <div class="feedback-item" id="feedback-2" data-status="in-progress">
                        <div class="d-flex">
                            <div class="user-avatar me-3">AS</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Amanda Smith</h6>
                                    <div class="d-flex align-items-center">
                                        <span class="feedback-status status-in-progress me-2">In Progress</span>
                                        <small class="text-muted">Yesterday</small>
                                    </div>
                                </div>
                                <p class="mb-2">Could you add a dark mode option? It would be easier on the eyes at night.</p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="badge bg-light text-dark me-1">#dark-mode</span>
                                        <span class="badge bg-light text-dark">#ui</span>
                                    </div>
                                    <button class="btn btn-sm btn-success reply-btn" data-feedback-id="2">Reply</button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Reply Already Sent -->
                        <div class="reply-item">
                            <div class="user-avatar">CM</div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">CashMate Team</h6>
                                    <small class="text-muted">10 hours ago</small>
                                </div>
                                <p class="mb-0">Thanks for your suggestion, Amanda! We're actually working on a dark mode option right now. We plan to release it in our next update in about 2 weeks.</p>
                            </div>
                        </div>
                        
                        <!-- Reply Form -->
                        <div class="reply-form" id="reply-form-2">
                            <form id="replyForm2">
                                <div class="mb-3">
                                    <textarea class="form-control" rows="3" placeholder="Write your reply..." required></textarea>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <select class="form-select form-select-sm" style="width: auto;">
                                            <option value="in-progress">Mark as In Progress</option>
                                            <option value="resolved">Mark as Resolved</option>
                                            <option value="closed">Mark as Closed</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-sm btn-light me-2 cancel-reply" data-feedback-id="2">Cancel</button>
                                        <button type="submit" class="btn btn-sm btn-success submit-reply" data-feedback-id="2">Send Reply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <!-- Feedback Item 3 -->
                    <div class="feedback-item" id="feedback-3" data-status="resolved">
                        <div class="d-flex">
                            <div class="user-avatar me-3">RJ</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Robert Johnson</h6>
                                    <div class="d-flex align-items-center">
                                        <span class="feedback-status status-resolved me-2">Resolved</span>
                                        <small class="text-muted">3 days ago</small>
                                    </div>
                                </div>
                                <p class="mb-2">Really helpful for tracking my business expenses. Would be nice to have an export feature for my accountant.</p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="badge bg-light text-dark me-1">#export</span>
                                        <span class="badge bg-light text-dark">#business</span>
                                    </div>
                                    <button class="btn btn-sm btn-success reply-btn" data-feedback-id="3">Reply</button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Reply Already Sent -->
                        <div class="reply-item">
                            <div class="user-avatar">CM</div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">CashMate Team</h6>
                                    <small class="text-muted">2 days ago</small>
                                </div>
                                <p class="mb-0">Hi Robert, thanks for your feedback! We've added an export feature that allows you to download your expense data in CSV, PDF, and Excel formats. You can find it under Settings > Export Data.</p>
                            </div>
                        </div>
                        
                        <!-- Customer Response -->
                        <div class="reply-item">
                            <div class="user-avatar">RJ</div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Robert Johnson</h6>
                                    <small class="text-muted">1 day ago</small>
                                </div>
                                <p class="mb-0">Perfect! Just what I needed. My accountant will be happy. Thanks for the quick implementation!</p>
                            </div>
                        </div>
                        
                        <!-- Reply Form -->
                        <div class="reply-form" id="reply-form-3">
                            <form id="replyForm3">
                                <div class="mb-3">
                                    <textarea class="form-control" rows="3" placeholder="Write your reply..." required></textarea>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <select class="form-select form-select-sm" style="width: auto;">
                                            <option value="in-progress">Mark as In Progress</option>
                                            <option value="resolved">Mark as Resolved</option>
                                            <option value="closed">Mark as Closed</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-sm btn-light me-2 cancel-reply" data-feedback-id="3">Cancel</button>
                                        <button type="submit" class="btn btn-sm btn-success submit-reply" data-feedback-id="3">Send Reply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <!-- Feedback Item 4 -->
                    <div class="feedback-item" id="feedback-4" data-status="closed">
                        <div class="d-flex">
                            <div class="user-avatar me-3">MK</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Maria Kim</h6>
                                    <div class="d-flex align-items-center">
                                        <span class="feedback-status status-closed me-2">Closed</span>
                                        <small class="text-muted">1 week ago</small>
                                    </div>
                                </div>
                                <p class="mb-2">I'm having trouble connecting my bank account. It keeps giving me an error.</p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="badge bg-light text-dark me-1">#bug</span>
                                        <span class="badge bg-light text-dark">#banking</span>
                                    </div>
                                    <button class="btn btn-sm btn-success reply-btn" data-feedback-id="4">Reply</button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Reply Already Sent -->
                        <div class="reply-item">
                            <div class="user-avatar">CM</div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">CashMate Team</h6>
                                    <small class="text-muted">6 days ago</small>
                                </div>
                                <p class="mb-0">Hi Maria, sorry to hear you're having trouble. Could you please tell us which bank you're trying to connect to and what error message you're seeing?</p>
                            </div>
                        </div>
                        
                        <!-- Customer Response -->
                        <div class="reply-item">
                            <div class="user-avatar">MK</div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Maria Kim</h6>
                                    <small class="text-muted">5 days ago</small>
                                </div>
                                <p class="mb-0">I'm trying to connect to First National Bank. The error is "Connection failed: Invalid credentials".</p>
                            </div>
                        </div>
                        
                        <!-- Team Response -->
                        <div class="reply-item">
                            <div class="user-avatar">CM</div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">CashMate Team</h6>
                                    <small class="text-muted">4 days ago</small>
                                </div>
                                <p class="mb-0">Thanks for the details. We're seeing a temporary issue with First National Bank connections. Our team is working on it. Could you try again in 24 hours?</p>
                            </div>
                        </div>
                        
                        <!-- Customer Final Response -->
                        <div class="reply-item">
                            <div class="user-avatar">MK</div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Maria Kim</h6>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-0">It's working now! Thanks for fixing it.</p>
                            </div>
                        </div>
                        
                        <!-- Reply Form -->
                        <div class="reply-form" id="reply-form-4">
                            <form id="replyForm4">
                                <div class="mb-3">
                                    <textarea class="form-control" rows="3" placeholder="Write your reply..." required></textarea>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <select class="form-select form-select-sm" style="width: auto;">
                                            <option value="in-progress">Mark as In Progress</option>
                                            <option value="resolved">Mark as Resolved</option>
                                            <option value="closed">Mark as Closed</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-sm btn-light me-2 cancel-reply" data-feedback-id="4">Cancel</button>
                                        <button type="submit" class="btn btn-sm btn-success submit-reply" data-feedback-id="4">Send Reply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <!-- More Feedback Items -->
                    <div class="feedback-item" id="feedback-5" data-status="new">
                        <div class="d-flex">
                            <div class="user-avatar me-3">TW</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Tom Wilson</h6>
                                    <div class="d-flex align-items-center">
                                        <span class="feedback-status status-new me-2">New</span>
                                        <small class="text-muted">4 hours ago</small>
                                    </div>
                                </div>
                                <p class="mb-2">I'd love to see a budget planning feature that suggests ways to save money based on my spending habits.</p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="badge bg-light text-dark me-1">#feature-request</span>
                                        <span class="badge bg-light text-dark">#budgeting</span>
                                    </div>
                                    <button class="btn btn-sm btn-success reply-btn" data-feedback-id="5">Reply</button>
                                </div>
                            </div>
                        </div>
                        <!-- Reply Form -->
                        <div class="reply-form" id="reply-form-5">
                            <form id="replyForm5">
                                <div class="mb-3">
                                    <textarea class="form-control" rows="3" placeholder="Write your reply..." required></textarea>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <select class="form-select form-select-sm" style="width: auto;">
                                            <option value="in-progress">Mark as In Progress</option>
                                            <option value="resolved">Mark as Resolved</option>
                                            <option value="closed">Mark as Closed</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-sm btn-light me-2 cancel-reply" data-feedback-id="5">Cancel</button>
                                        <button type="submit" class="btn btn-sm btn-success submit-reply" data-feedback-id="5">Send Reply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div class="feedback-item" id="feedback-6" data-status="new">
                        <div class="d-flex">
                            <div class="user-avatar me-3">JG</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Jennifer Garcia</h6>
                                    <div class="d-flex align-items-center">
                                        <span class="feedback-status status-new me-2">New</span>
                                        <small class="text-muted">8 hours ago</small>
                                    </div>
                                </div>
                                <p class="mb-2">The app crashes sometimes when I try to edit a transaction that has attachments. Using iPhone 14 Pro with iOS 17.</p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="badge bg-light text-dark me-1">#bug</span>
                                        <span class="badge bg-light text-dark">#iOS</span>
                                    </div>
                                    <button class="btn btn-sm btn-success reply-btn" data-feedback-id="6">Reply</button>
                                </div>
                            </div>
                        </div>
                        <!-- Reply Form -->
                        <div class="reply-form" id="reply-form-6">
                            <form id="replyForm6">
                                <div class="mb-3">
                                    <textarea class="form-control" rows="3" placeholder="Write your reply..." required></textarea>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <select class="form-select form-select-sm" style="width: auto;">
                                            <option value="in-progress">Mark as In Progress</option>
                                            <option value="resolved">Mark as Resolved</option>
                                            <option value="closed">Mark as Closed</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-sm btn-light me-2 cancel-reply" data-feedback-id="6">Cancel</button>
                                        <button type="submit" class="btn btn-sm btn-success submit-reply" data-feedback-id="6">Send Reply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div class="feedback-item" id="feedback-7" data-status="in-progress">
                        <div class="d-flex">
                            <div class="user-avatar me-3">DP</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">David Parker</h6>
                                    <div class="d-flex align-items-center">
                                        <span class="feedback-status status-in-progress me-2">In Progress</span>
                                        <small class="text-muted">2 days ago</small>
                                    </div>
                                </div>
                                <p class="mb-2">Could you integrate with PayPal and Venmo? That would make it easier to track all my payments in one place.</p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="badge bg-light text-dark me-1">#feature-request</span>
                                        <span class="badge bg-light text-dark">#integration</span>
                                    </div>
                                    <button class="btn btn-sm btn-success reply-btn" data-feedback-id="7">Reply</button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Reply Already Sent -->
                        <div class="reply-item">
                            <div class="user-avatar">CM</div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">CashMate Team</h6>
                                    <small class="text-muted">1 day ago</small>
                                </div>
                                <p class="mb-0">Hi David, thanks for the suggestion! We've added PayPal integration to our development roadmap. We're currently exploring the technical requirements for Venmo integration as well. We'll keep you updated on our progress.</p>
                            </div>
                        </div>
                        
                        <!-- Reply Form -->
                        <div class="reply-form" id="reply-form-7">
                            <form id="replyForm7">
                                <div class="mb-3">
                                    <textarea class="form-control" rows="3" placeholder="Write your reply..." required></textarea>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <select class="form-select form-select-sm" style="width: auto;">
                                            <option value="in-progress">Mark as In Progress</option>
                                            <option value="resolved">Mark as Resolved</option>
                                            <option value="closed">Mark as Closed</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-sm btn-light me-2 cancel-reply" data-feedback-id="7">Cancel</button>
                                        <button type="submit" class="btn btn-sm btn-success submit-reply" data-feedback-id="7">Send Reply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Pagination -->
            <nav aria-label="Feedback pagination">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Custom JavaScript -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Handle URL parameters for direct feedback view
            const urlParams = new URLSearchParams(window.location.search);
            const feedbackId = urlParams.get('id');
            
            if (feedbackId) {
    const feedbackElement = document.getElementById(\`feedback-\${feedbackId}\`);
    if (feedbackElement) {
        // Highlight the selected feedback
        feedbackElement.classList.add('highlighted');
        
        // Scroll to the feedback
        feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Open the reply form
        const replyForm = document.getElementById(\`reply-form-\${feedbackId}\`);
        if (replyForm) {
            replyForm.classList.add('active');
        }
    }
}

// Reply button click handler
const replyButtons = document.querySelectorAll('.reply-btn');
replyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const feedbackId = this.getAttribute('data-feedback-id');
        const replyForm = document.getElementById(\`reply-form-\${feedbackId}\`);
        
        // Close all other open reply forms
        document.querySelectorAll('.reply-form.active').forEach(form => {
            if (form.id !== \`reply-form-\${feedbackId}\`) {
                form.classList.remove('active');
            }
        });
        
        // Toggle current reply form
        replyForm.classList.toggle('active');
    });
});

// Cancel reply button click handler
const cancelButtons = document.querySelectorAll('.cancel-reply');
cancelButtons.forEach(button => {
    button.addEventListener('click', function() {
        const feedbackId = this.getAttribute('data-feedback-id');
        const replyForm = document.getElementById(\`reply-form-\${feedbackId}\`);
        replyForm.classList.remove('active');
    });
});

// Submit reply form handler
const submitButtons = document.querySelectorAll('.submit-reply');
submitButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const feedbackId = this.getAttribute('data-feedback-id');
        const replyForm = document.getElementById(\`reply-form-\${feedbackId}\`);
        const textarea = replyForm.querySelector('textarea');
        const statusSelect = replyForm.querySelector('select');
        
        if (textarea.value.trim() === '') {
            alert('Please write a reply before submitting.');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For demo purposes, we'll create a new reply element
        const feedbackItem = document.getElementById(\`feedback-\${feedbackId}\`);
        const replyHtml = \`
            <div class="reply-item">
                <div class="user-avatar">CM</div>
                <div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h6 class="mb-0">CashMate Team</h6>
                        <small class="text-muted">Just now</small>
                    </div>
                    <p class="mb-0">\${textarea.value}</p>
                </div>
            </div>
        \`;
        
        // Insert the new reply before the reply form
        replyForm.insertAdjacentHTML('beforebegin', replyHtml);
        
        // Update the status if changed
        const currentStatus = feedbackItem.getAttribute('data-status');
        const newStatus = statusSelect.value;
        
        if (currentStatus !== newStatus) {
            feedbackItem.setAttribute('data-status', newStatus);
            const statusDisplay = feedbackItem.querySelector('.feedback-status');
            
            // Remove old status class
            statusDisplay.classList.remove(\`status-\${currentStatus}\`);
            
            // Add new status class
            statusDisplay.classList.add(\`status-\${newStatus}\`);
            
            // Update status text
            statusDisplay.textContent = newStatus.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        }
        
        // Reset and close the form
        textarea.value = '';
        replyForm.classList.remove('active');
        
        // Show success message
        alert('Reply sent successfully!');
    });
});
            // Filter buttons
            const filterButtons = document.querySelectorAll('.filter-options .btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    const feedbackItems = document.querySelectorAll('.feedback-item');
                    
                    feedbackItems.forEach(item => {
                        const status = item.getAttribute('data-status');
                        
                        if (filter === 'all' || status === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Search functionality
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const feedbackItems = document.querySelectorAll('.feedback-item');
                
                feedbackItems.forEach(item => {
                    const feedbackText = item.textContent.toLowerCase();
                    
                    if (feedbackText.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
            
            // Demo: Add new reply functionality
            const replyForms = document.querySelectorAll('form[id^="replyForm"]');
            replyForms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Handled by the submit button click event
                });
            });
        });
    </script>
</body>
</html>
`;
